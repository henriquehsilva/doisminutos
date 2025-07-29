import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import StoryCard from './components/StoryCard';
import Footer from './components/Footer';
import storiesData from './data/stories.json';

interface Story {
  id: number;
  title: string;
  cover_image_url: string;
  description: string;
  subscriber_count: number;
  substack_url: string;
}

function App() {
  const [stories, setStories] = useState<Story[]>([]);
  const [filteredStories, setFilteredStories] = useState<Story[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setStories(storiesData);
      setFilteredStories(storiesData);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const filtered = stories.filter(story =>
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStories(filtered);
  }, [searchTerm, stories]);

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-pink-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">Carregando histórias...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        
        {filteredStories.length === 0 && searchTerm && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Nenhuma história encontrada</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Não encontramos histórias que correspondam à sua busca. 
              Tente usar palavras-chave diferentes.
            </p>
          </div>
        )}
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
        
        {filteredStories.length > 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-600 font-medium">
              {filteredStories.length === 1 
                ? '1 história encontrada' 
                : `${filteredStories.length} histórias encontradas`
              }
            </p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;