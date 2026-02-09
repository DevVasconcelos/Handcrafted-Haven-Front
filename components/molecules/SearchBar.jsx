import { useEffect, useState } from 'react';

export default function SearchBar({ onSearch, initialValue = '' }) {
  const [value, setValue] = useState(initialValue || '');

  useEffect(() => {
    setValue(initialValue || '');
  }, [initialValue]);

  const handleChange = (event) => {
    const nextValue = event.target.value;
    setValue(nextValue);
    if (onSearch) {
      onSearch(nextValue);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <form className="relative flex-1 max-w-xl" onSubmit={handleSubmit}>
      <input
        className="w-full min-w-60 lg:min-w-95 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="search"
        placeholder="Search handcrafted products..."
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  );
}
