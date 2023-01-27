/**
 * Alternative method using grid: https://css-tricks.com/creating-a-bar-graph-with-css-grid/
 */

export default function BarGraph({ statType }) {
  const unit = 20; 
  return (
    <div className="flex items-end">
      {[[4, 2, 8, 1, 7, 10, 8, 2, 2, 6], [6, 1, 10, 2, 25, 9, 10, 1, 4]][statType].map((data) => 
        <div style={{height: data * unit, width: unit}} className="bg-orange-300 mx-1 hover:bg-orange-400"></div>
      )}
    </div>
  )
}