import { parse } from 'path';
import React, { useState, useEffect, FormEvent } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { Title, FlexColumn, RepositoryProfile, Form, Align, Column, Error, Repositories} from './styles';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {

    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storageRepository = localStorage.getItem(
            '@GithubExplorer:repositories', 
        );

        if (storageRepository) {
            return JSON.parse(storageRepository)
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem(
            '@GithubExplorer:repositories',
            JSON.stringify(repositories)
        )
    }, [repositories]);

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        if (!newRepo) {
            setInputError('Digite um "usuário"/"repositório" para pesquisar!');
            return;
        }

        try { 

        const response = await api.get<Repository>(`repos/${newRepo}`);
        const repository = response.data;

        setRepositories([...repositories, repository]);
        setNewRepo('');
        setInputError('');
        } catch (err) {
            setInputError("Repositório não encontrado ou inexistente!")
        }
    }

    return (
    <>
        <FlexColumn>
            <Title>Explore repositórios no GitHub</Title>

            <Form hasError={Boolean(inputError)} onSubmit={handleAddRepository}>
                <input value={newRepo} onChange={e => setNewRepo(e.target.value)} placeholder="Digite o nome do Repositório" />
                <button type="submit">Pesquisar</button>
                {inputError && <Error>{inputError}</Error>}
            </Form>

            {inputError && <Error>{inputError}</Error>}

            <Repositories>
                    <Align>
                        {repositories.map(repository => (
                            <Column>
                                <Link key={repository.full_name} to={`/repository/${repository.full_name}`}>
                                <RepositoryProfile>
                                    <img src={repository.owner.avatar_url} alt={repository.owner.login}></img>
                                    <h2>
                                        <strong>{repository.full_name}</strong>
                                        <p>{repository.description}</p>
                                    </h2>
                                </RepositoryProfile>
                                </Link>
                            </Column>
                        ))}
                    </Align>
            </Repositories>
        </FlexColumn>
    </>
    );
};

export default Dashboard;