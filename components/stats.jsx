const Stats = ({ items }) => {
  if(!items.length){
  return(
  <p className="stats">
    <em>Start adding some item to your packing list 🚀</em>
  </p>
  )}
  const numItems = items.length
  const numPacked = items.filter((item) => item.packed).length
  const percentage = (numItems > 0 ? Math.round(numPacked / numItems * 100) : 0)  
  return (<>

    <footer className="stats" >
      <em>
        {percentage === 100
        ? "you got  everything! ready to go 🚀"
        :`💼 you have ${numItems} item on your list ,
        and you already packed ${numPacked} (${percentage}%)`
        }
      </em>
    </footer>
  </>
  );
}

export default Stats;