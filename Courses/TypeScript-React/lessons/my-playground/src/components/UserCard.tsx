// 1. Define a type for props: { name: string; age: number }
// 2. Use the type in your function component
// 3. Render name and age inside a <div>

type UserCardProps = {
  name: string;
  age: number;
};

export default function UserCard({ name, age }: UserCardProps) {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
}
