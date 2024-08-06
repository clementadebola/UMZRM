import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';

const SearchContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const SearchHeader = styled.h2`
  color: #003366;
  margin-bottom: 1rem;
`;

const SearchResultItem = styled(Link)`
  display: block;
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const ResultTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #003366;
`;

const ResultExcerpt = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

interface SearchResult {
  id: number;
  title: string;
  excerpt: string;
  url: string;
}

const Search: React.FC = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get('q');
    if (searchQuery) {
      performSearch(searchQuery);
    }
  }, [location]);

  const performSearch = async (query: string) => {
    setLoading(true);
    // Simulating an API call with setTimeout
    setTimeout(() => {
      // This is a mock result. Replace this with your actual search logic/API call
      const mockResults: SearchResult[] = [
        { id: 1, title: `Result 1 for "${query}"`, excerpt: "This is a sample excerpt for the first result.", url: "/page1" },
        { id: 2, title: `Result 2 for "${query}"`, excerpt: "This is a sample excerpt for the second result.", url: "/page2" },
        { id: 3, title: `Result 3 for "${query}"`, excerpt: "This is a sample excerpt for the third result.", url: "/page3" },
      ];
      setSearchResults(mockResults);
      setLoading(false);
    }, 1000);
  };

  return (
    <SearchContainer>
      <SearchHeader>Search Results</SearchHeader>
      {loading ? (
        <p>Loading results...</p>
      ) : searchResults.length > 0 ? (
        searchResults.map((result) => (
          <SearchResultItem key={result.id} to={result.url}>
            <ResultTitle>{result.title}</ResultTitle>
            <ResultExcerpt>{result.excerpt}</ResultExcerpt>
          </SearchResultItem>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </SearchContainer>
  );
};

export default Search;