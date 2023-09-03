export default function UserProfile({params}) {
 
    return (
    <div>
      <h1>User Profile Page</h1>
        <p>User profile{params.id}</p>
    </div>
  );
};

