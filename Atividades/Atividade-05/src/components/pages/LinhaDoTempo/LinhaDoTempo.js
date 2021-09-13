import { Post } from "../Posts/Posts";
export function LinhaDoTempo() {
    let infoPosts = {
        listaPosts: [
            {
                id: "01",
                texto: "Bom dia pessoal!",
                likes: "0001",
                usuario: "Bruno"
            },
            {
                id: "02",
                texto: "Bom dia!!",
                likes: "0010",
                usuario: "João"
            },
            {
                id: "03",
                texto: "Tudo bem?",
                likes: "0101",
                usuario: "Maria"
            },
            {
                id: "04",
                texto: "Olá pessoal",
                likes: "0101",
                usuario: "Ana"
            }
        ]
    }
    const listaPosts = infoPosts.listaPosts.map((post) =>
        <Post
            id={post.id}
            usuario={post.usuario}
            texto={post.texto}
            likes={post.likes}>
        </Post>
    );

    return (
        <div>
            {listaPosts}
        </div>

    )
}