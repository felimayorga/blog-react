export default function UserCard({ picture, firstName, lastName, title }) {
  return (
    <div className="user-info">
      <img src={picture} alt="Foto del usuario" className="user-photo" />

      <div className="user-details">
        <h2>
          {title}. {firstName} {lastName}
        </h2>
      </div>
    </div>
  );
}
