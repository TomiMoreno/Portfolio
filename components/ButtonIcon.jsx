export default function ButtonIcon({children, href, imageURL, className}){

  return <>
    <a href={href} className={className}>{children}<img src={imageURL} /></a>
    <style jsx>{`
     
      a {
        padding: .5rem .2rem;
        padding-right: .5rem; 
        border: solid black 2px;
        border-radius: 1.5rem;
        width: 9rem;
        align-items: center;
        justify-content: space-between;
        display: flex; 
        transition: all .5s;
        margin-bottom:1em
      }

      a > img {
        width: 1.6rem;
        height: auto;
        transition: all .5s;
      }
      a:hover > img {
        transform: scale(1.2);
      }
      a:hover {
        border-color: green;
      }
    `}</style>
  </>
}