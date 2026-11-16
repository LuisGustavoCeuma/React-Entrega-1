export default function lista({elementos}) {
    return (
        <ul>
            {elementos.map((elemento) => <li key={elemento}>{elemento}</li>)}
        </ul>
    )
}