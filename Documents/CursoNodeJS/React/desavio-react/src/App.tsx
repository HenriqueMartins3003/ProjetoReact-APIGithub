import "./App.css";
import useGitHubRepositories from "./hooks/useGitHubRepositories/";
import useRepositoryLikeManagement from "./hooks/useRepositoryLikeManagement";

function App() {
  const { repos, isLoading, error, refetch } = useGitHubRepositories({
    org: "google",
  });

  const { repositoryLikes, toggleLike } = useRepositoryLikeManagement();

  return (
    <div className="repositories">
      {isLoading && <p>Carregando...</p>}

      {error && (
        <div>
          <p>Erro ao carregar os dados </p>
          <button onClick={refetch}> Tentar novamente </button>
        </div>
      )}

      {repos.map((repo) => {
        const isLiked = repositoryLikes.find((r) => r.id === repo.id)?.liked;
        return (
          <div key={repo.id}>
            <h2>{repo.full_name}</h2>
            <span> by {repo.owner.login}</span>
            <button onClick={() => toggleLike(repo.id)}>
              {isLiked ? (
                <i className="bx bxs-star"></i>
              ) : (
                <i className="bx bx-star"></i>
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
