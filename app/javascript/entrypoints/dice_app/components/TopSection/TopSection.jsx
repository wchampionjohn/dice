import React from 'react'
import {useSelector} from 'react-redux'
import History from './History'
import {isGameRolled} from '../../store/game-slice'
import {bsToClassName, bsToText} from '../../lib/utils/gameHelper'
import DiceResult from './DiceResult'

function TopSection() {
  const {nonTripleRounds, gameResult, minBetAmount} = useSelector((state) => state.game)
  const {records} = useSelector((state) => state.history)
  const {betAmount} = useSelector((state) => state.betting)
  const isShowResult = useSelector(isGameRolled)

  return (<div className='top-section'>
      <div className='item points'>
        <div className='point-item'>
          <h3>最小押注</h3>
          <p>{minBetAmount}</p>
        </div>
        <div className='point-item'>
          <h3>本局總押注</h3>
          <p>{betAmount}</p>
        </div>
        <div className='point-item'>
          <h3>未開豹子局數</h3>
          <p>{nonTripleRounds}</p>
        </div>
        {isShowResult && (<div className='result'>
            <div className='point'>
              <p>{gameResult.number}</p>
            </div>
            <div className='bs'>
              <p className={bsToClassName(gameResult.bs)}>
                {bsToText(gameResult.bs)}
              </p>
            </div>
          </div>)}
      </div>
      <div className='item dice-cup-container'>
        {isShowResult ? (<DiceResult dices={gameResult.dices}/>) : (<div className='dice-cup'/>)}
      </div>
      <History records={records}/>
    </div>)
}

TopSection.propTypes = {}

TopSection.defaultProps = {}

export default TopSection
