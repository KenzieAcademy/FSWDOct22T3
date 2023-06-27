## P0
- As a [user], I [want to visualize the market prices of various commodities], [so that I can make informed decisions on which activities to partake in when playing Elite Dangerous]. 

- As a [user], I [want to search through all of the systems and planets], [so that I can learn about which planets and systems have certain resources].

--- 

- #1 As a [user], I [want to search for ships and ship modules], [so that I can see which modules are compatible with certain ships].
  - Blocked by: #2

- #2 As a [front end developer], I [need to send an API request to an endpoint to receive ship and module data], [so that I can display it for the user].
  - Blocking: #1, #3, #4
  - Completion Criteria:
    - GET /api/v1/ships - Return all ships in the database
    - GET /api/v1/modules - Return all modules in the database
  - Extra Info
    - Ship model:
      - name
      - avg price
      - weapon configurations
        - small hardpoints
        - medium hardpoints
        - large hardpoints
        - huge hardpoints
      - utility mounts
      - core internals
        - reactor
        - FSD drive
        - engines
        - armoring
      - optional internals
        - list of module slots with class size
    - Module model:
      - name
      - avg price
      - class size
      - module type (weapon, utility, core, optional)
  - Due date: 1 week


- #3 As a [user], I [want to see all available ships], [so that I know what my choices are when choosing to buy a ship].
  - Blocked by: #2

- #4 As a [user], I [want to search for ships by name, price, and landing pad compatibility], [so that I can choose the right ship that I can afford]. 
  - Blocked by: #2

- #5 As a [user], I [want to see all available ship modules], [so that I know what kinds of features I can install on my ships].

- #6 As a [user], I [want to be able to see which modules take up which slots], [so that I can understand which modules are compatible with certain ships].
