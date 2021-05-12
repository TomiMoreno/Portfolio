import Project from "./Project"

export default function Projects() {
  const projectList = [{
    name: 'Btree',
    codeURL: 'https://github.com/TomiMoreno/btree',
    description: 'Aplicación interactiva de vizualización de árboles binarios.',
    pageURL: 'btree.vercel.app',
    imageURL: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/binary-tree-to-DLL.png',
  },
  {
    name: 'PreceBOT',
    codeURL: '',
    description: 'Descripcion descripcion Descripcion descripcion Descripcion descripcion Descripcion descripcion Descripcion descripcion ',
    pageURL: '',
    imageURL: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/binary-tree-to-DLL.png',
  }]
  return (<>
    <main>
      <h1>Mis proyectos</h1>
      <div className="container">
        {projectList.map((project, i) => <Project isOdd={i % 2 === 1} key={`project-${i}`} {...project} />)}
      </div>
    </main>
    <style jsx>{`
      main{
        background: #000;
        width: 100vw;
        text-align:center;
      }
      main:before{
        content: '';
        border-bottom: 100px solid black;
        border-left: 100vw solid transparent;
        top: -118px;
        position: relative;
      }
      h1{
        color: white;
      }
      .container{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
      }
      .container > * {
        margin-bottom: 1rem;
      }
    `}</style>
  </>)
}