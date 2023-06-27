# Feature Request: Market data

## MVP
- As a [user], I [want to see a traditional stock ticker of live market price data], [so that I can visualize the hot commodities].

- As a [user], I [want to visualize the market prices of various commodities], [so that I can make informed decisions on which activities to partake in when playing Elite Dangerous].

- As a [front end developer], I [want to be able to send an API request for aggregated market data], [so that I can create data visualization items on the client side].

- As a [user], I [want to be able to save/favorite systems/planets/stations], [so that I know where I've been for certain things].

- As a [user], I [want to to create an account], [so that favorites/preferences/past actions, etc. can be saved when I come back to the app].

- As a [stakeholder], I [want an income stream without forcing users to pay a membership], [so that we can continue paying our developers].

- As a [user], I [should see non-intrusive ads], [so that I can continue accessing the application for "free"].


## Backlog
- As a [paying member], I [want to get see to the most profitable trade routes], [so that I can maximize my trading efficiency in-game]

- As a [user], I [want to be able to pay a membership fee], [so that I can access more computationally intensive sourced data].

- As a [stakeholder], I [want to recoup some of the server costs], [so that I can continue developing the application and providing valuable resources].

## Definition of "done"?
- The task is done when a user can see all commodity galactic averages, and historical and detailed market data about individual commodities of their choosing

## Outline of tasks/subtasks
- Create API endpoints:
  - that will query, aggregate, and return all market price data
  - query and return market data about a single commodity
- Components:
  - Display basic data of all commodities  
    - avg buy price
    - avg sell price
    - avg stock
    - avg demand
  - Display detailed information about the historical market data of a single commodity 
    - stock chart of historic buy/sell prices
    - Station buying for highest
    - Station selling for lowest
    - Distance between the two stations

## User Personas
- any user? anyone who just visits the site? or is there some kind of membership/account required?
- anyone who visits. maybe members get no ads