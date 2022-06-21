import React, { useEffect, useState } from 'react';

export default function Container() {
  const [description, setDescription] = useState();

  const fetchData = async () => {
    const response = await fetch('/api/hello');
    const parsed = await response.json();
    const name = parsed.name;
    setDescription(name);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div data-testid='description'>{description}</div>;
}
