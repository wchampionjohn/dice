import React from 'react'

import { useSelector } from 'react-redux'
import BigSmall from './BettingItems/BigSmall'
import DoubleItem from './BettingItems/DoubleItem'

import Triple from './BettingItems/Triple'
import TripleItem from './BettingItems/Triple/TripleItem'
import TripleTAll from './BettingItems/Triple/TripleAll'
import Number from './BettingItems/Number'
import DoubleTripleContainer from './BettingItems/DoubleTripleContainer'

import TwoDieTxt from './BettingItems/TwoDieTxt'
import TwoDieItem from './BettingItems/TwoDieItem'

import Single from './BettingItems/Single'
import OneDie from './BettingItems/OneDie'
import { isGameRolled } from '../../store/game-slice'
import { useIsItemWon } from '../../store/game-actions'

function BettingSection() {
  const { betChipToItem } = useSelector((state) => state.betting)
  const getBetItem = (itemCode) => {
    return {
      code: itemCode,
      betAmount: betChipToItem[itemCode] || 0,
    }
  }

  const useIsLost = (codes) => {
    const itemWonStatuses = codes.map(useIsItemWon)
    const itemWon = itemWonStatuses.some((status) => status)

    const gemRolled = useSelector(isGameRolled)
    return gemRolled ? !itemWon : false
  }

  return (
    <>
      <div className='wrap triple-section'>
        <BigSmall
          bs='small'
          {...getBetItem('bs01')}
        />
        <DoubleTripleContainer
          txt='Each double 1 wins 11'
          className='item double'
          isLost={useIsLost(['db01', 'db02', 'db03'])}
        >
          <DoubleItem
            {...getBetItem('db01')}
            number='1'
          />
          <DoubleItem
            {...getBetItem('db02')}
            number='2'
          />
          <DoubleItem
            {...getBetItem('db03')}
            number='3'
          />
        </DoubleTripleContainer>
        <Triple>
          <DoubleTripleContainer
            txt={['Each triple', '1 wins 180']}
            className='triple-item'
            isLost={useIsLost(['tp01', 'tp02', 'tp03'])}
          >
            <TripleItem
              {...getBetItem('tp01')}
              number='1'
            />
            <TripleItem
              {...getBetItem('tp02')}
              number='2'
            />
            <TripleItem
              {...getBetItem('tp03')}
              number='3'
            />
          </DoubleTripleContainer>
          <DoubleTripleContainer
            txt='1 wins 30'
            className='triple-item win30'
            isWrapDiceGroup={false}
            isLost={useIsLost(['tp00'])}
          >
            <TripleTAll {...getBetItem('tp00')} />
          </DoubleTripleContainer>
          <DoubleTripleContainer
            txt={['Each triple', '1 wins 180']}
            className='triple-item'
            isLost={useIsLost(['tp04', 'tp05', 'tp06'])}
          >
            <TripleItem
              {...getBetItem('tp04')}
              number='4'
            />
            <TripleItem
              {...getBetItem('tp05')}
              number='5'
            />
            <TripleItem
              {...getBetItem('tp06')}
              number='6'
            />
          </DoubleTripleContainer>
        </Triple>
        <DoubleTripleContainer
          txt='Each double 1 wins 11'
          className='item double'
          isLost={useIsLost(['db04', 'db05', 'db06'])}
        >
          <DoubleItem
            {...getBetItem('db04')}
            number='4'
          />
          <DoubleItem
            {...getBetItem('db05')}
            number='5'
          />
          <DoubleItem
            {...getBetItem('db06')}
            number='6'
          />
        </DoubleTripleContainer>
        <BigSmall
          {...getBetItem('bs02')}
          bs='big'
        />
      </div>
      <div className='wrap number-section'>
        <Number
          {...getBetItem('nb04')}
          number={4}
          wins={60}
        />
        <Number
          {...getBetItem('nb05')}
          number={5}
          wins={18}
        />
        <Number
          {...getBetItem('nb06')}
          number={6}
          wins={12}
        />
        <Number
          {...getBetItem('nb07')}
          number={7}
          wins={7}
        />
        <Number
          {...getBetItem('nb08')}
          number={8}
          wins={6}
        />
        <Number
          {...getBetItem('nb09')}
          number={9}
          wins={6}
        />
        <Number
          {...getBetItem('nb10')}
          number={10}
          wins={6}
        />
        <Number
          {...getBetItem('nb11')}
          number={11}
          wins={6}
        />
        <Number
          {...getBetItem('nb12')}
          number={12}
          wins={6}
        />
        <Number
          {...getBetItem('nb13')}
          number={13}
          wins={6}
        />
        <Number
          {...getBetItem('nb14')}
          number={14}
          wins={12}
        />
        <Number
          {...getBetItem('nb15')}
          number={15}
          wins={18}
        />
        <Number
          {...getBetItem('nb16')}
          number={16}
          wins={20}
        />
        <Number
          {...getBetItem('nb17')}
          number={17}
          wins={60}
        />
      </div>
      <div className='wrap two-die-section'>
        <TwoDieTxt />
        <TwoDieItem
          number1='1'
          number2='2'
          {...getBetItem('td12')}
        />
        <TwoDieItem
          number1='1'
          number2='3'
          {...getBetItem('td13')}
        />
        <TwoDieItem
          number1='1'
          number2='4'
          {...getBetItem('td14')}
        />
        <TwoDieItem
          number1='1'
          number2='5'
          {...getBetItem('td15')}
        />
        <TwoDieItem
          number1='1'
          number2='6'
          {...getBetItem('td16')}
        />
        <TwoDieItem
          number1='2'
          number2='3'
          {...getBetItem('td23')}
        />
        <TwoDieItem
          number1='2'
          number2='4'
          {...getBetItem('td24')}
        />
        <TwoDieItem
          number1='2'
          number2='5'
          {...getBetItem('td25')}
        />
        <TwoDieItem
          number1='2'
          number2='6'
          {...getBetItem('td26')}
        />
        <TwoDieItem
          number1='3'
          number2='4'
          {...getBetItem('td34')}
        />
        <TwoDieItem
          number1='3'
          number2='5'
          {...getBetItem('td35')}
        />
        <TwoDieItem
          number1='3'
          number2='6'
          {...getBetItem('td36')}
        />
        <TwoDieItem
          number1='4'
          number2='5'
          {...getBetItem('td45')}
        />
        <TwoDieItem
          number1='4'
          number2='6'
          {...getBetItem('td46')}
        />
        <TwoDieItem
          number1='5'
          number2='6'
          {...getBetItem('td56')}
        />
      </div>
      <div className='wrap single-section'>
        <Single
          number='1'
          {...getBetItem('sg01')}
        />
        <Single
          number='2'
          {...getBetItem('sg02')}
        />
        <Single
          number='3'
          {...getBetItem('sg03')}
        />
        <Single
          number='4'
          {...getBetItem('sg04')}
        />
        <Single
          number='5'
          {...getBetItem('sg05')}
        />
        <Single
          number='6'
          {...getBetItem('sg06')}
        />
      </div>
      <div className='wrap'>
        <OneDie multiple={1} />
        <OneDie multiple={2} />
        <OneDie multiple={3} />
      </div>
    </>
  )
}

BettingSection.propTypes = {}

BettingSection.defaultProps = {}

export default BettingSection
