'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

// Define a type for member data
type Member = {
  id: number;
  name: string;
  email: string;
  phone: string;
  // Add additional fields as needed
};

export default function Home() {
  const [members, setMembers] = useState<Member[]>([]);
  const [filteredMembers, setFilteredMembers] = useState<Member[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch members from the API
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
        );
        setMembers(response.data);
        setFilteredMembers(response.data);
      } catch (error) {
        console.error('Error fetching members', error);
      }
    };

    fetchMembers();
  }, []);

  // Filter members based on the search term
  useEffect(() => {
    const filtered = members.filter(
      (member) =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.email.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredMembers(filtered);
  }, [searchTerm, members]);

  // Handle delete member
  const deleteMember = (id: number) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  // Render the member list
  return (
    <div>
      <input
        type="text"
        className="mb-4 w-full rounded-lg border-2 border-gray-400 px-4 py-2"
        placeholder="Search by name or email"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredMembers.map((member) => (
          <li key={member.id}>
            {member.name} - {member.email} - {member.phone}
            <button
              className="px-6"
              type="button"
              onClick={() => deleteMember(member.id)}
            >
              Delete
            </button>
            {/* Add navigation buttons for edit and show */}
          </li>
        ))}
      </ul>
    </div>
  );
}
