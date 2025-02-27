import useSWR from 'swr'

import { Panel, Progress } from '../../components'
import intlFormatHelper from '../../utils/intl-format-helper'

const Epoch = ({ epochData }) => {
  return (
    <Panel>
      <div className="d-flex flex-wrap">
        <div className="mr-md pr-md border-0 border-r border-solid border-inset">
          <div>
            <span className="text-muted">Slot Height</span>
          </div>
          <div className="text-xl">
            {epochData ? intlFormatHelper.number(epochData.slotHeightTotal) : '-'}
          </div>
        </div>
        <div className="lg:mr-md lg:pr-md border-0 lg:border-r border-solid border-inset">
          <div>
          <span className="text-muted">Transactions</span>
          </div>
          <div className="text-xl">
            {epochData ? intlFormatHelper.number(epochData.transactionsTotal) : '-'}
          </div>
        </div>
        <div className="mt-md lg:mt-0 pt-md lg:pt-0 border-0 border-solid border-inset grow border-t lg:border-t-0">
          <div>
          <span className="text-muted">Epoch</span>
          </div>
          <div className="d-flex">
            {epochData ? (<>
              <span className="text-xl">{epochData.currentEpoch}</span>
              <div className="grow mx-md">
                <div className="d-flex text-sm">
                  <div className="grow">{epochData.epochProgress} %</div>
                  <div>ETA {intlFormatHelper.timeLeft(epochData.epochETA)} </div>
                </div>
                <Progress className="grow" min={0} max={100} value={epochData.epochProgress}></Progress>
              </div>
              <span className="text-inset text-xl">{epochData.nextEpoch}</span>
            </>) : '-'}
          </div>
        </div>
      </div>
    </Panel>
  )
}

export default Epoch
