import "./barChart.css";
export default function BarChart({ data,swap,sortedIndex}) {
    
    sortedIndex = sortedIndex.filter(e=> !swap.includes(e));

    
    
    return (
        <div className="barChart">
            {data && data.map((value,index)=>(
                <div  key={index} className={ sortedIndex.includes(index) ? "sortedBar bar" : (swap[0] == index || swap[1] == index )?" bar swapbar" : "bar barColor"}  style={{height:`${value * 4}px`}} >
                    {value}
                </div>
            ))}

        </div>
    )
}