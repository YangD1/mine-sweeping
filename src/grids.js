import React from 'react';
import './fonts/iconfont.css' // From https://www.iconfont.cn/
class grids extends React.Component {
  render() {
    let element;
    const index = this.props.index;
    const gridsData = this.props.gridsData;
    const grid = this.props.gridsData[index];
    const flagElement = <i className="iconfont iconhighest"></i>;
    let color;

    if (Array.isArray(gridsData) && gridsData.length > 0){
      if(grid.flag && grid.isOpen === false){
        element = flagElement;
      }else{
        switch (grid.type) {
          case 'mine':
            element = grid.isOpen && (
              <div className="grid-item-box" style={grid.flag ? { background: 'green' } : { background: 'red' }}>
                <i className="iconfont iconzhadan"></i>
              </div>
            );
            break;
          case 'default':
            // color switcher
            switch (grid.value) {
              case 1:
                color = 'blue';
                break;
              case 2:
                color = 'green';
                break;
              case 3:
                color = 'red';
                break;
              case 4:
                color = 'purple';
                break;
              case 5:
                color = 'orange';
                break;
              default:
                color = 'black'
                break;
            }
            // create this gird element
            let elementClass = "grid-item-box";
            elementClass += grid.value ? ' number-hover' : '';
            element = grid.isOpen && (
              <div
                className={elementClass}
                style={{color: color}}
                onMouseDown={this.props.computeGrid}
              >
                {grid.value || ''}
              </div>
            )
            break;
          default:
            break;
        }
      }
    }

    element = element ? element : <div></div>;
    return element;
  }
}

export default grids;