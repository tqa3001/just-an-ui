# Cellular automaton UI project specs

## Glossaries
- Experiment
  + Automaton of size (1 <= n <= 10)
  + State
    v1: (0, 1) 
    v2: ?
  + Logic
    For each cell -> rules for 8 neighbor squares (512) 
    v1: 
      Options (Conway, Randomize)
      Override with a map from <state1> -> (0, 1)
    v2: A simpler way for user to write rules (a simplified CLI?)

## Landing page: 
[Navbar: [Home] ----------- [About] [Github]] 
  **Cellular automaton maker**
  A customizable tool for creating expriments with cellular automaton. 
        [Create], [Import], [Run] 
- Table/list of current automatons (how to make them continue to run in real time? React states?)
  [ #id | <Title> | Description ]
  <items>... 

## Create page: 
Basic info: Name, short description of experiment
Stages
1. Setup: 
- (Initial state, Logic)
- Evolution speed (default: 1, )
2. Runtime
- Evolve (Cur_state > Next_state) per 1/expSpeed ms for expTime/expSpeed ms.  
- Pause button to enter Freeze mode
3. Freeze mode
- Click on a square to flip or add

## Experiment page: 
Input: A set of ids for cellula automatons
Output: 
- Embed two experiment next to each other 
- Button to start evolution + stuff as usual. 