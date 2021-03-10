// export const Server_URL = "http://localhost:8080/tictactoe"
import { topRbottL, topLbottR, topLR, midLR, bottomLR, leftTopBottom, midTopBottom, rightTopBottom } from './img';
export const Scenario = [topRbottL, topLbottR, topLR, midLR, bottomLR, leftTopBottom, midTopBottom, rightTopBottom];
export const Server_URL = 'https://strong-charge-305714.ew.r.appspot.com/tictactoe';
export const localhost = 'http://localhost:8080/tictactoe';
export function InitialBoard() {
    return [
        [[], [], []],
        [[], [], []],
        [[], [], []],
    ];
}
