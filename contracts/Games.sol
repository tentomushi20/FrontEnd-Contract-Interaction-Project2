// SPDX-License-Identifier: MIT

pragma solidity >=0.8.11 ;

contract Game{
    string public game;

    function getGame() public view  returns (string memory){
        return game;
    }

    function setGame(string memory gameName) public {
        game = gameName;
    }
}