import React, { useState, FormEvent } from 'react';
import api from '../../services/api';
import { Title, FlexColumn, RepositoryProfile, Form, Align, Column} from './styles';

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
    const [Repositories, setRepositories] = useState<Repository[]>([]);

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        const response = await api.get<Repository>(`repos/${newRepo}`);
        const repository = response.data;

        setRepositories([...Repositories, repository]);
    }

    return (
    <>
        <FlexColumn>
            <Title>Explore repositórios no GitHub</Title>

            <Form onSubmit={handleAddRepository}>
                <input value={newRepo} onChange={e => setNewRepo(e.target.value)} placeholder="Digite o nome do Repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <RepositoryProfile>
            <Align>
                    {Repositories.map(repository => (
                    <Column>
                        <img src={repository.owner.avatar_url} alt={repository.owner.login}></img>
                        <h2>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </h2>
                    </Column>
                    ))}
             </Align>
            </RepositoryProfile>
        </FlexColumn>
    </>
    );
};

export default Dashboard;