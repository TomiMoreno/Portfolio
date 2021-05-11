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
      .split{
        background: #ffffff;
        width: 70%;
        display: flex;
        flex-direction: row;
        border-radius:20px;
        overflow: hidden;
        padding: 1rem;
        margin-bottom: 2rem;
        text-align:left;
        height: 13rem;
        justify-content:space-around;
      }
      .split:nth-child(odd){
        flex-direction:row-reverse;
      }
      h2{
        color: #289533;
        
      }
      img{
        width:35%;
        height:auto;
        object-fit:cover;
      }
      
      .content{
        font-weight: 500;
        width: 60%
      }
      .btnContainer{
        display:flex; 
        align-items:center;
      }
    `}</style>
  </>
}