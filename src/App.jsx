import React from 'react'
import TickerCard from './TickerCard.jsx'

const stocks = [
  { ticker: 'NVDA', name: '엔비디아', currentPrice: 12308249.43, previousClose: 181.40 },
  { ticker: 'TSLA', name: '테슬라', currentPrice: 0.85, previousClose: 439.95 },
  { ticker: 'GOOGL', name: '알파벳', currentPrice: 912049230.66, previousClose: 253.22 },
//  { ticker: '005930.KS', name: '삼성전자', currentPrice: 85400, previousClose: 84700 },
]

function App() {
  return (
    <div className='bg-purple-900 min-h-screen p-8 flex flex-col items-center'>
      <h1 className="text-4xl font-thin text-blue-300 mb-10">오늘의 주식 시세</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl">
        {
          stocks.map(stock => (
            <TickerCard 
              key={stock.ticker} 
              ticker={stock.ticker} 
              name={stock.name} 
              currentPrice={stock.currentPrice} 
              previousClose={stock.previousClose}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App