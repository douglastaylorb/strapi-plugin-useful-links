import React, { useState, useEffect } from 'react';
import { request } from 'strapi-helper-plugin';

const UsefulLinksApp = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const data = await request('/useful-links', { method: 'GET' });
        setLinks(data);
      } catch (err) {
        strapi.notification.error('Failed to load links');
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Links Úteis</h1>
      <ul>
        {links.map(link => (
          <li key={link.id}>
            <a href={link.url}  rel="noopener noreferrer">{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsefulLinksApp;