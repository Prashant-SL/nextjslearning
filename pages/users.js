import React from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      users: data,
    },
  };
};

const users = ({ users }) => {
  return (
    <>
      <div>users</div>
      {users.map((e) => {
        return (
          <div key={e.id}>
            <h1>{e.name}</h1>
            <h1>{e.email}</h1>
          </div>
        );
      })}
    </>
  );
};

export default users;
