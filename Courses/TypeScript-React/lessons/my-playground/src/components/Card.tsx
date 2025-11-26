// 1. Props: title: string, children?: ReactNode
// 2. Render title in <h2>, children in <section>

type CardProps = {
  title: string;
  children?: ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
