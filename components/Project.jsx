import ButtonIcon from "./ButtonIcon"

export default function Project({name, description, codeURL, pageURL, imageURL }){
  
  return <>
    <div className="split">
      <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/binary-tree-to-DLL.png" alt={name} />
      <div className="content">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="btnContainer">
          <ButtonIcon href={codeURL} imageURL="/github.svg">Visitar código</ButtonIcon>
          <ButtonIcon href={pageURL} imageURL="/globe.svg">Visitar página</ButtonIcon>
        </div>
      </div>
    </div>
    <style jsx>{`
    .btnContainer{
      display:flex; 
      align-items:center;
      justify-content:center;
    }
    h2{
      color: #289533;
    }
    .split{
      background: #ffffff;
      border-radius:20px;
      overflow: hidden;
      width:60%;
      display:flex;
      flex-wrap:wrap;
      justify-content: center;
      margin-bottom:2rem;
      padding: 1rem;
    }
    img{
      object-fit:cover;
      flex:1;
      max-width: 20rem;
      height:auto
    }
    .content{
      flex:1;
    }
    .split:nth-child(odd){
        flex-direction:row-reverse;
    }
    @media (min-width:60em){
      .btnContainer{
        justify-content: none;
      }  
    .split{
    }
    
    
    
    
    }
      
    `}</style>
  </>
}