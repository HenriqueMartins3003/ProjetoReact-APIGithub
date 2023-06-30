import { useCallback, useEffect, useState } from "react";
import { IGithubRepository } from "../../types/IGithubRepository.js";

type Props = {
  org: string;
};

export default function useGitHubRepositories({ org }: Props) {
  const [repos, setRepos] = useState<IGithubRepository[]>([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetcher = useCallback(() => {
    fetch(`https://api.github.com/orgs/${org}/repos`)
      .then((r) => r.json())
      .then((data) => {
        setRepos(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  return { repos, isLoading, error, refetch: fetcher };
}
