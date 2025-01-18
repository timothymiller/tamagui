// @ts-nocheck
type Theme = {
  accentBackground: string;
  accentColor: string;
  shadowColor: string;
  shadowColorHover: string;
  shadowColorPress: string;
  shadowColorFocus: string;
  background0: string;
  background025: string;
  background05: string;
  background075: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  color0: string;
  color025: string;
  color05: string;
  color075: string;
  background: string;
  backgroundHover: string;
  backgroundPress: string;
  backgroundFocus: string;
  borderColor: string;
  borderColorHover: string;
  borderColorPress: string;
  borderColorFocus: string;
  color: string;
  colorHover: string;
  colorPress: string;
  colorFocus: string;
  colorTransparent: string;
  placeholderColor: string;
  outlineColor: string;
  green1: string;
  green2: string;
  green3: string;
  green4: string;
  green5: string;
  green6: string;
  green7: string;
  green8: string;
  green9: string;
  green10: string;
  green11: string;
  green12: string;
  red1: string;
  red2: string;
  red3: string;
  red4: string;
  red5: string;
  red6: string;
  red7: string;
  red8: string;
  red9: string;
  red10: string;
  red11: string;
  red12: string;
  yellow1: string;
  yellow2: string;
  yellow3: string;
  yellow4: string;
  yellow5: string;
  yellow6: string;
  yellow7: string;
  yellow8: string;
  yellow9: string;
  yellow10: string;
  yellow11: string;
  yellow12: string;

}

function t(a: [number, number][]) {
  let res: Record<string,string> = {}
  for (const [ki, vi] of a) {
    res[ks[ki] as string] = vs[vi] as string
  }
  return res as Theme
}
const vs = [
  'hsla(0, 0%, 29%, 1)',
  'hsla(0, 0%, 73%, 1)',
  'rgba(0,0,0,0.085)',
  'rgba(0,0,0,0.04)',
  'hsla(0, 0%, 100%, 0)',
  'hsla(0, 0%, 100%, 0.25)',
  'hsla(0, 0%, 100%, 0.5)',
  'hsla(0, 0%, 100%, 0.75)',
  'hsla(0, 0%, 100%, 1)',
  'hsla(0, 0%, 92%, 1)',
  'hsla(0, 0%, 83%, 1)',
  'hsla(0, 0%, 75%, 1)',
  'hsla(0, 0%, 67%, 1)',
  'hsla(0, 0%, 59%, 1)',
  'hsla(0, 0%, 50%, 1)',
  'hsla(0, 0%, 42%, 1)',
  'hsla(0, 0%, 34%, 1)',
  'hsla(0, 0%, 26%, 1)',
  'hsla(0, 0%, 17%, 1)',
  'hsla(0, 0%, 9%, 1)',
  'hsla(0, 0%, 9%, 0)',
  'hsla(0, 0%, 9%, 0.25)',
  'hsla(0, 0%, 9%, 0.5)',
  'hsla(0, 0%, 9%, 0.75)',
  'hsl(136, 50.0%, 98.9%)',
  'hsl(138, 62.5%, 96.9%)',
  'hsl(139, 55.2%, 94.5%)',
  'hsl(140, 48.7%, 91.0%)',
  'hsl(141, 43.7%, 86.0%)',
  'hsl(143, 40.3%, 79.0%)',
  'hsl(146, 38.5%, 69.0%)',
  'hsl(151, 40.2%, 54.1%)',
  'hsl(151, 55.0%, 41.5%)',
  'hsl(152, 57.5%, 37.6%)',
  'hsl(153, 67.0%, 28.5%)',
  'hsl(155, 40.0%, 14.0%)',
  'hsl(359, 100%, 99.4%)',
  'hsl(359, 100%, 98.6%)',
  'hsl(360, 100%, 96.8%)',
  'hsl(360, 97.9%, 94.8%)',
  'hsl(360, 90.2%, 91.9%)',
  'hsl(360, 81.7%, 87.8%)',
  'hsl(359, 74.2%, 81.7%)',
  'hsl(359, 69.5%, 74.3%)',
  'hsl(358, 75.0%, 59.0%)',
  'hsl(358, 69.4%, 55.2%)',
  'hsl(358, 65.0%, 48.7%)',
  'hsl(354, 50.0%, 14.6%)',
  'hsl(60, 54.0%, 98.5%)',
  'hsl(52, 100%, 95.5%)',
  'hsl(55, 100%, 90.9%)',
  'hsl(54, 100%, 86.6%)',
  'hsl(52, 97.9%, 82.0%)',
  'hsl(50, 89.4%, 76.1%)',
  'hsl(47, 80.4%, 68.0%)',
  'hsl(48, 100%, 46.1%)',
  'hsl(53, 92.0%, 50.0%)',
  'hsl(50, 100%, 48.5%)',
  'hsl(42, 100%, 29.0%)',
  'hsl(40, 55.0%, 13.5%)',
  'rgba(0,0,0,0.3)',
  'rgba(0,0,0,0.2)',
  'hsla(0, 0%, 2%, 0)',
  'hsla(0, 0%, 2%, 0.25)',
  'hsla(0, 0%, 2%, 0.5)',
  'hsla(0, 0%, 2%, 0.75)',
  'hsla(0, 0%, 2%, 1)',
  'hsla(0, 0%, 11%, 1)',
  'hsla(0, 0%, 20%, 1)',
  'hsla(0, 0%, 38%, 1)',
  'hsla(0, 0%, 47%, 1)',
  'hsla(0, 0%, 55%, 1)',
  'hsla(0, 0%, 64%, 1)',
  'hsla(0, 0%, 82%, 1)',
  'hsla(0, 0%, 91%, 1)',
  'hsl(146, 30.0%, 7.4%)',
  'hsl(155, 44.2%, 8.4%)',
  'hsl(155, 46.7%, 10.9%)',
  'hsl(154, 48.4%, 12.9%)',
  'hsl(154, 49.7%, 14.9%)',
  'hsl(154, 50.9%, 17.6%)',
  'hsl(153, 51.8%, 21.8%)',
  'hsl(151, 51.7%, 28.4%)',
  'hsl(151, 49.3%, 46.5%)',
  'hsl(151, 50.0%, 53.2%)',
  'hsl(137, 72.0%, 94.0%)',
  'hsl(353, 23.0%, 9.8%)',
  'hsl(357, 34.4%, 12.0%)',
  'hsl(356, 43.4%, 16.4%)',
  'hsl(356, 47.6%, 19.2%)',
  'hsl(356, 51.1%, 21.9%)',
  'hsl(356, 55.2%, 25.9%)',
  'hsl(357, 60.2%, 31.8%)',
  'hsl(358, 65.0%, 40.4%)',
  'hsl(358, 85.3%, 64.0%)',
  'hsl(358, 100%, 69.5%)',
  'hsl(351, 89.0%, 96.0%)',
  'hsl(45, 100%, 5.5%)',
  'hsl(46, 100%, 6.7%)',
  'hsl(45, 100%, 8.7%)',
  'hsl(45, 100%, 10.4%)',
  'hsl(47, 100%, 12.1%)',
  'hsl(49, 100%, 14.3%)',
  'hsl(49, 90.3%, 18.4%)',
  'hsl(50, 100%, 22.0%)',
  'hsl(54, 100%, 68.0%)',
  'hsl(48, 100%, 47.0%)',
  'hsl(53, 100%, 91.0%)',
  'hsla(0, 100%, 99%, 0)',
  'hsla(0, 100%, 99%, 0.25)',
  'hsla(0, 100%, 99%, 0.5)',
  'hsla(0, 100%, 99%, 0.75)',
  'hsla(0, 100%, 99%, 1)',
  'hsla(0, 100%, 97%, 1)',
  'hsla(0, 100%, 95%, 1)',
  'hsla(0, 90%, 92%, 1)',
  'hsla(0, 81%, 88%, 1)',
  'hsla(359, 74%, 82%, 1)',
  'hsla(359, 69%, 74%, 1)',
  'hsla(358, 75%, 59%, 1)',
  'hsla(358, 69%, 55%, 1)',
  'hsla(358, 65%, 49%, 1)',
  'hsla(355, 49%, 15%, 1)',
  'hsla(355, 48%, 15%, 0)',
  'hsla(355, 48%, 15%, 0.25)',
  'hsla(355, 48%, 15%, 0.5)',
  'hsla(355, 48%, 15%, 0.75)',
  'hsla(60, 45%, 98%, 0)',
  'hsla(60, 45%, 98%, 0.25)',
  'hsla(60, 45%, 98%, 0.5)',
  'hsla(60, 45%, 98%, 0.75)',
  'hsla(60, 50%, 98%, 1)',
  'hsla(52, 100%, 95%, 1)',
  'hsla(55, 100%, 91%, 1)',
  'hsla(54, 100%, 87%, 1)',
  'hsla(52, 98%, 82%, 1)',
  'hsla(50, 90%, 76%, 1)',
  'hsla(47, 80%, 68%, 1)',
  'hsla(48, 100%, 46%, 1)',
  'hsla(53, 92%, 50%, 1)',
  'hsla(50, 100%, 48%, 1)',
  'hsla(42, 100%, 29%, 1)',
  'hsla(41, 56%, 13%, 1)',
  'hsla(41, 55%, 13%, 0)',
  'hsla(41, 55%, 13%, 0.25)',
  'hsla(41, 55%, 13%, 0.5)',
  'hsla(41, 55%, 13%, 0.75)',
  'hsla(140, 60%, 99%, 0)',
  'hsla(140, 60%, 99%, 0.25)',
  'hsla(140, 60%, 99%, 0.5)',
  'hsla(140, 60%, 99%, 0.75)',
  'hsla(140, 60%, 99%, 1)',
  'hsla(138, 63%, 97%, 1)',
  'hsla(139, 57%, 95%, 1)',
  'hsla(139, 48%, 91%, 1)',
  'hsla(141, 44%, 86%, 1)',
  'hsla(142, 40%, 79%, 1)',
  'hsla(146, 38%, 69%, 1)',
  'hsla(151, 40%, 54%, 1)',
  'hsla(151, 55%, 42%, 1)',
  'hsla(152, 57%, 38%, 1)',
  'hsla(153, 67%, 28%, 1)',
  'hsla(155, 41%, 14%, 1)',
  'hsla(155, 41%, 14%, 0)',
  'hsla(155, 41%, 14%, 0.25)',
  'hsla(155, 41%, 14%, 0.5)',
  'hsla(155, 41%, 14%, 0.75)',
  'hsla(351, 25%, 10%, 0)',
  'hsla(351, 25%, 10%, 0.25)',
  'hsla(351, 25%, 10%, 0.5)',
  'hsla(351, 25%, 10%, 0.75)',
  'hsla(350, 24%, 10%, 1)',
  'hsla(357, 34%, 12%, 1)',
  'hsla(357, 43%, 16%, 1)',
  'hsla(356, 47%, 19%, 1)',
  'hsla(356, 51%, 22%, 1)',
  'hsla(357, 55%, 26%, 1)',
  'hsla(357, 60%, 32%, 1)',
  'hsla(358, 65%, 40%, 1)',
  'hsla(358, 86%, 64%, 1)',
  'hsla(358, 100%, 69%, 1)',
  'hsla(353, 90%, 96%, 1)',
  'hsla(353, 90%, 96%, 0)',
  'hsla(353, 90%, 96%, 0.25)',
  'hsla(353, 90%, 96%, 0.5)',
  'hsla(353, 90%, 96%, 0.75)',
  'hsla(46, 100%, 5%, 0)',
  'hsla(46, 100%, 5%, 0.25)',
  'hsla(46, 100%, 5%, 0.5)',
  'hsla(46, 100%, 5%, 0.75)',
  'hsla(45, 100%, 5%, 1)',
  'hsla(46, 100%, 7%, 1)',
  'hsla(45, 100%, 9%, 1)',
  'hsla(45, 100%, 10%, 1)',
  'hsla(46, 100%, 12%, 1)',
  'hsla(49, 100%, 14%, 1)',
  'hsla(49, 89%, 18%, 1)',
  'hsla(50, 100%, 22%, 1)',
  'hsla(54, 100%, 68%, 1)',
  'hsla(48, 100%, 47%, 1)',
  'hsla(53, 100%, 91%, 1)',
  'hsla(53, 100%, 91%, 0)',
  'hsla(53, 100%, 91%, 0.25)',
  'hsla(53, 100%, 91%, 0.5)',
  'hsla(53, 100%, 91%, 0.75)',
  'hsla(145, 33%, 7%, 0)',
  'hsla(145, 33%, 7%, 0.25)',
  'hsla(145, 33%, 7%, 0.5)',
  'hsla(145, 33%, 7%, 0.75)',
  'hsla(145, 32%, 7%, 1)',
  'hsla(155, 44%, 8%, 1)',
  'hsla(155, 46%, 11%, 1)',
  'hsla(154, 48%, 13%, 1)',
  'hsla(155, 50%, 15%, 1)',
  'hsla(154, 51%, 18%, 1)',
  'hsla(153, 51%, 22%, 1)',
  'hsla(151, 52%, 28%, 1)',
  'hsla(151, 49%, 46%, 1)',
  'hsla(151, 50%, 53%, 1)',
  'hsla(136, 73%, 94%, 1)',
  'hsla(134, 73%, 94%, 0)',
  'hsla(134, 73%, 94%, 0.25)',
  'hsla(134, 73%, 94%, 0.5)',
  'hsla(134, 73%, 94%, 0.75)',
  'undefined',
]

const ks = [
'accentBackground',
'accentColor',
'shadowColor',
'shadowColorHover',
'shadowColorPress',
'shadowColorFocus',
'background0',
'background025',
'background05',
'background075',
'color1',
'color2',
'color3',
'color4',
'color5',
'color6',
'color7',
'color8',
'color9',
'color10',
'color11',
'color12',
'color0',
'color025',
'color05',
'color075',
'background',
'backgroundHover',
'backgroundPress',
'backgroundFocus',
'borderColor',
'borderColorHover',
'borderColorPress',
'borderColorFocus',
'color',
'colorHover',
'colorPress',
'colorFocus',
'colorTransparent',
'placeholderColor',
'outlineColor',
'green1',
'green2',
'green3',
'green4',
'green5',
'green6',
'green7',
'green8',
'green9',
'green10',
'green11',
'green12',
'red1',
'red2',
'red3',
'red4',
'red5',
'red6',
'red7',
'red8',
'red9',
'red10',
'red11',
'red12',
'yellow1',
'yellow2',
'yellow3',
'yellow4',
'yellow5',
'yellow6',
'yellow7',
'yellow8',
'yellow9',
'yellow10',
'yellow11',
'yellow12']


const n1 = t([[0, 0],[1, 1],[2, 2],[3, 2],[4, 3],[5, 3],[6, 4],[7, 5],[8, 6],[9, 7],[10, 8],[11, 9],[12, 10],[13, 11],[14, 12],[15, 13],[16, 14],[17, 15],[18, 16],[19, 17],[20, 18],[21, 19],[22, 20],[23, 21],[24, 22],[25, 23],[26, 8],[27, 7],[28, 9],[29, 9],[30, 11],[31, 10],[32, 12],[33, 11],[34, 19],[35, 18],[36, 19],[37, 18],[38, 20],[39, 16],[40, 21],[41, 24],[42, 25],[43, 26],[44, 27],[45, 28],[46, 29],[47, 30],[48, 31],[49, 32],[50, 33],[51, 34],[52, 35],[53, 36],[54, 37],[55, 38],[56, 39],[57, 40],[58, 41],[59, 42],[60, 43],[61, 44],[62, 45],[63, 46],[64, 47],[65, 48],[66, 49],[67, 50],[68, 51],[69, 52],[70, 53],[71, 54],[72, 55],[73, 56],[74, 57],[75, 58],[76, 59]])

export const light = n1
const n2 = t([[0, 16],[1, 11],[2, 60],[3, 60],[4, 61],[5, 61],[6, 62],[7, 63],[8, 64],[9, 65],[10, 66],[11, 67],[12, 68],[13, 0],[14, 69],[15, 70],[16, 71],[17, 72],[18, 1],[19, 73],[20, 74],[21, 8],[22, 4],[23, 5],[24, 6],[25, 7],[26, 66],[27, 67],[28, 65],[29, 65],[30, 0],[31, 69],[32, 68],[33, 0],[34, 8],[35, 74],[36, 8],[37, 74],[38, 4],[39, 1],[40, 5],[41, 75],[42, 76],[43, 77],[44, 78],[45, 79],[46, 80],[47, 81],[48, 82],[49, 32],[50, 83],[51, 84],[52, 85],[53, 86],[54, 87],[55, 88],[56, 89],[57, 90],[58, 91],[59, 92],[60, 93],[61, 44],[62, 94],[63, 95],[64, 96],[65, 97],[66, 98],[67, 99],[68, 100],[69, 101],[70, 102],[71, 103],[72, 104],[73, 56],[74, 105],[75, 106],[76, 107]])

export const dark = n2
const n3 = t([[0, 11],[1, 16],[2, 2],[3, 2],[4, 3],[5, 3],[6, 62],[7, 63],[8, 64],[9, 65],[10, 66],[11, 67],[12, 68],[13, 0],[14, 69],[15, 70],[16, 71],[17, 72],[18, 1],[19, 73],[20, 74],[21, 8],[22, 4],[23, 5],[24, 6],[25, 7],[26, 66],[27, 65],[28, 67],[29, 67],[30, 0],[31, 68],[32, 69],[33, 0],[34, 8],[35, 74],[36, 8],[37, 74],[38, 4],[39, 1],[40, 5]])

export const light_accent = n3
const n4 = t([[0, 1],[1, 0],[2, 60],[3, 60],[4, 61],[5, 61],[6, 4],[7, 5],[8, 6],[9, 7],[10, 8],[11, 9],[12, 10],[13, 11],[14, 12],[15, 13],[16, 14],[17, 15],[18, 16],[19, 17],[20, 18],[21, 19],[22, 20],[23, 21],[24, 22],[25, 23],[26, 8],[27, 9],[28, 7],[29, 7],[30, 11],[31, 12],[32, 10],[33, 11],[34, 19],[35, 18],[36, 19],[37, 18],[38, 20],[39, 16],[40, 21]])

export const dark_accent = n4
const n5 = t([[0, 0],[1, 1],[2, 2],[3, 2],[4, 3],[5, 3],[6, 108],[7, 109],[8, 110],[9, 111],[10, 112],[11, 112],[12, 113],[13, 114],[14, 115],[15, 116],[16, 117],[17, 118],[18, 119],[19, 120],[20, 121],[21, 122],[22, 123],[23, 124],[24, 125],[25, 126],[26, 112],[27, 111],[28, 112],[29, 112],[30, 114],[31, 113],[32, 115],[33, 114],[34, 122],[35, 121],[36, 122],[37, 121],[38, 123],[39, 119],[40, 124]])

export const light_error = n5
const n6 = t([[0, 0],[1, 1],[2, 2],[3, 2],[4, 3],[5, 3],[6, 127],[7, 128],[8, 129],[9, 130],[10, 131],[11, 132],[12, 133],[13, 134],[14, 135],[15, 136],[16, 137],[17, 138],[18, 139],[19, 140],[20, 141],[21, 142],[22, 143],[23, 144],[24, 145],[25, 146],[26, 131],[27, 130],[28, 132],[29, 132],[30, 134],[31, 133],[32, 135],[33, 134],[34, 142],[35, 141],[36, 142],[37, 141],[38, 143],[39, 139],[40, 144]])

export const light_warning = n6
const n7 = t([[0, 0],[1, 1],[2, 2],[3, 2],[4, 3],[5, 3],[6, 147],[7, 148],[8, 149],[9, 150],[10, 151],[11, 152],[12, 153],[13, 154],[14, 155],[15, 156],[16, 157],[17, 158],[18, 159],[19, 160],[20, 161],[21, 162],[22, 163],[23, 164],[24, 165],[25, 166],[26, 151],[27, 150],[28, 152],[29, 152],[30, 154],[31, 153],[32, 155],[33, 154],[34, 162],[35, 161],[36, 162],[37, 161],[38, 163],[39, 159],[40, 164]])

export const light_success = n7
const n8 = t([[0, 16],[1, 11],[2, 60],[3, 60],[4, 61],[5, 61],[6, 167],[7, 168],[8, 169],[9, 170],[10, 171],[11, 172],[12, 173],[13, 174],[14, 175],[15, 176],[16, 177],[17, 178],[18, 119],[19, 179],[20, 180],[21, 181],[22, 182],[23, 183],[24, 184],[25, 185],[26, 171],[27, 172],[28, 170],[29, 170],[30, 174],[31, 175],[32, 173],[33, 174],[34, 181],[35, 180],[36, 181],[37, 180],[38, 182],[39, 119],[40, 183]])

export const dark_error = n8
const n9 = t([[0, 16],[1, 11],[2, 60],[3, 60],[4, 61],[5, 61],[6, 186],[7, 187],[8, 188],[9, 189],[10, 190],[11, 191],[12, 192],[13, 193],[14, 194],[15, 195],[16, 196],[17, 197],[18, 139],[19, 198],[20, 199],[21, 200],[22, 201],[23, 202],[24, 203],[25, 204],[26, 190],[27, 191],[28, 189],[29, 189],[30, 193],[31, 194],[32, 192],[33, 193],[34, 200],[35, 199],[36, 200],[37, 199],[38, 201],[39, 139],[40, 202]])

export const dark_warning = n9
const n10 = t([[0, 16],[1, 11],[2, 60],[3, 60],[4, 61],[5, 61],[6, 205],[7, 206],[8, 207],[9, 208],[10, 209],[11, 210],[12, 211],[13, 212],[14, 213],[15, 214],[16, 215],[17, 216],[18, 159],[19, 217],[20, 218],[21, 219],[22, 220],[23, 221],[24, 222],[25, 223],[26, 209],[27, 210],[28, 208],[29, 208],[30, 212],[31, 213],[32, 211],[33, 212],[34, 219],[35, 218],[36, 219],[37, 218],[38, 220],[39, 159],[40, 221]])

export const dark_success = n10
const n11 = t([[26, 9],[27, 8],[28, 10],[29, 10],[30, 12],[31, 11],[33, 12],[32, 13]])

export const light_ListItem = n11
export const light_SelectTrigger = n11
export const light_Card = n11
export const light_Progress = n11
export const light_TooltipArrow = n11
export const light_SliderTrack = n11
export const light_Input = n11
export const light_TextArea = n11
const n12 = t([[26, 11],[27, 10],[28, 12],[29, 12],[30, 14],[31, 13],[33, 14],[32, 15]])

export const light_Button = n12
export const light_SliderTrackActive = n12
const n13 = t([[26, 10],[27, 9],[28, 11],[29, 11],[30, 13],[31, 12],[33, 13],[32, 14]])

export const light_Checkbox = n13
export const light_Switch = n13
export const light_TooltipContent = n13
export const light_RadioGroupItem = n13
const n14 = t([[0, 1],[1, 0],[2, 224],[3, 224],[4, 224],[5, 224],[6, 20],[7, 21],[8, 22],[9, 23],[10, 19],[11, 18],[12, 17],[13, 16],[14, 15],[15, 14],[16, 13],[17, 12],[18, 11],[19, 10],[20, 9],[21, 8],[22, 4],[23, 5],[24, 6],[25, 7],[26, 19],[27, 23],[28, 18],[29, 18],[30, 16],[31, 17],[32, 15],[33, 16],[34, 8],[35, 9],[36, 8],[37, 9],[38, 4],[39, 11],[40, 5]])

export const light_SwitchThumb = n14
export const light_SliderThumb = n14
export const light_Tooltip = n14
export const light_ProgressIndicator = n14
const n15 = t([[26, 67],[27, 68],[28, 66],[29, 66],[30, 69],[31, 70],[33, 69],[32, 0]])

export const dark_ListItem = n15
export const dark_SelectTrigger = n15
export const dark_Card = n15
export const dark_Progress = n15
export const dark_TooltipArrow = n15
export const dark_SliderTrack = n15
export const dark_Input = n15
export const dark_TextArea = n15
const n16 = t([[26, 0],[27, 69],[28, 68],[29, 68],[30, 71],[31, 72],[33, 71],[32, 70]])

export const dark_Button = n16
export const dark_SliderTrackActive = n16
const n17 = t([[26, 68],[27, 0],[28, 67],[29, 67],[30, 70],[31, 71],[33, 70],[32, 69]])

export const dark_Checkbox = n17
export const dark_Switch = n17
export const dark_TooltipContent = n17
export const dark_RadioGroupItem = n17
const n18 = t([[0, 11],[1, 16],[2, 224],[3, 224],[4, 224],[5, 224],[6, 4],[7, 5],[8, 6],[9, 7],[10, 8],[11, 74],[12, 73],[13, 1],[14, 72],[15, 71],[16, 70],[17, 69],[18, 0],[19, 68],[20, 67],[21, 66],[22, 62],[23, 63],[24, 64],[25, 65],[26, 8],[27, 74],[28, 7],[29, 7],[30, 1],[31, 72],[32, 73],[33, 1],[34, 66],[35, 67],[36, 66],[37, 67],[38, 62],[39, 0],[40, 63]])

export const dark_SwitchThumb = n18
export const dark_SliderThumb = n18
export const dark_Tooltip = n18
export const dark_ProgressIndicator = n18
const n19 = t([[26, 67],[27, 66],[28, 68],[29, 68],[30, 69],[31, 0],[33, 69],[32, 70]])

export const light_accent_ListItem = n19
export const light_accent_SelectTrigger = n19
export const light_accent_Card = n19
export const light_accent_Progress = n19
export const light_accent_TooltipArrow = n19
export const light_accent_SliderTrack = n19
export const light_accent_Input = n19
export const light_accent_TextArea = n19
const n20 = t([[26, 0],[27, 68],[28, 69],[29, 69],[30, 71],[31, 70],[33, 71],[32, 72]])

export const light_accent_Button = n20
export const light_accent_SliderTrackActive = n20
const n21 = t([[26, 68],[27, 67],[28, 0],[29, 0],[30, 70],[31, 69],[33, 70],[32, 71]])

export const light_accent_Checkbox = n21
export const light_accent_Switch = n21
export const light_accent_TooltipContent = n21
export const light_accent_RadioGroupItem = n21
const n22 = t([[0, 16],[1, 11],[2, 224],[3, 224],[4, 224],[5, 224],[6, 4],[7, 5],[8, 6],[9, 7],[10, 8],[11, 74],[12, 73],[13, 1],[14, 72],[15, 71],[16, 70],[17, 69],[18, 0],[19, 68],[20, 67],[21, 66],[22, 62],[23, 63],[24, 64],[25, 65],[26, 8],[27, 7],[28, 74],[29, 74],[30, 1],[31, 73],[32, 72],[33, 1],[34, 66],[35, 67],[36, 66],[37, 67],[38, 62],[39, 0],[40, 63]])

export const light_accent_SwitchThumb = n22
export const light_accent_SliderThumb = n22
export const light_accent_Tooltip = n22
export const light_accent_ProgressIndicator = n22
const n23 = t([[26, 9],[27, 10],[28, 8],[29, 8],[30, 12],[31, 13],[33, 12],[32, 11]])

export const dark_accent_ListItem = n23
export const dark_accent_SelectTrigger = n23
export const dark_accent_Card = n23
export const dark_accent_Progress = n23
export const dark_accent_TooltipArrow = n23
export const dark_accent_SliderTrack = n23
export const dark_accent_Input = n23
export const dark_accent_TextArea = n23
const n24 = t([[26, 11],[27, 12],[28, 10],[29, 10],[30, 14],[31, 15],[33, 14],[32, 13]])

export const dark_accent_Button = n24
export const dark_accent_SliderTrackActive = n24
const n25 = t([[26, 10],[27, 11],[28, 9],[29, 9],[30, 13],[31, 14],[33, 13],[32, 12]])

export const dark_accent_Checkbox = n25
export const dark_accent_Switch = n25
export const dark_accent_TooltipContent = n25
export const dark_accent_RadioGroupItem = n25
const n26 = t([[0, 0],[1, 1],[2, 224],[3, 224],[4, 224],[5, 224],[6, 20],[7, 21],[8, 22],[9, 23],[10, 19],[11, 18],[12, 17],[13, 16],[14, 15],[15, 14],[16, 13],[17, 12],[18, 11],[19, 10],[20, 9],[21, 8],[22, 4],[23, 5],[24, 6],[25, 7],[26, 19],[27, 18],[28, 23],[29, 23],[30, 16],[31, 15],[32, 17],[33, 16],[34, 8],[35, 9],[36, 8],[37, 9],[38, 4],[39, 11],[40, 5]])

export const dark_accent_SwitchThumb = n26
export const dark_accent_SliderThumb = n26
export const dark_accent_Tooltip = n26
export const dark_accent_ProgressIndicator = n26
const n27 = t([[26, 112],[27, 112],[28, 113],[29, 113],[30, 115],[31, 114],[33, 115],[32, 116]])

export const light_error_ListItem = n27
export const light_error_SelectTrigger = n27
export const light_error_Card = n27
export const light_error_Progress = n27
export const light_error_TooltipArrow = n27
export const light_error_SliderTrack = n27
export const light_error_Input = n27
export const light_error_TextArea = n27
const n28 = t([[26, 114],[27, 113],[28, 115],[29, 115],[30, 117],[31, 116],[33, 117],[32, 118]])

export const light_error_Button = n28
export const light_error_SliderTrackActive = n28
const n29 = t([[26, 113],[27, 112],[28, 114],[29, 114],[30, 116],[31, 115],[33, 116],[32, 117]])

export const light_error_Checkbox = n29
export const light_error_Switch = n29
export const light_error_TooltipContent = n29
export const light_error_RadioGroupItem = n29
const n30 = t([[0, 1],[1, 0],[2, 224],[3, 224],[4, 224],[5, 224],[6, 123],[7, 124],[8, 125],[9, 126],[10, 122],[11, 121],[12, 120],[13, 119],[14, 118],[15, 117],[16, 116],[17, 115],[18, 114],[19, 113],[20, 112],[21, 112],[22, 108],[23, 109],[24, 110],[25, 111],[26, 122],[27, 126],[28, 121],[29, 121],[30, 119],[31, 120],[32, 118],[33, 119],[34, 112],[35, 112],[36, 112],[37, 112],[38, 108],[39, 114],[40, 109]])

export const light_error_SwitchThumb = n30
export const light_error_SliderThumb = n30
export const light_error_Tooltip = n30
export const light_error_ProgressIndicator = n30
const n31 = t([[26, 132],[27, 131],[28, 133],[29, 133],[30, 135],[31, 134],[33, 135],[32, 136]])

export const light_warning_ListItem = n31
export const light_warning_SelectTrigger = n31
export const light_warning_Card = n31
export const light_warning_Progress = n31
export const light_warning_TooltipArrow = n31
export const light_warning_SliderTrack = n31
export const light_warning_Input = n31
export const light_warning_TextArea = n31
const n32 = t([[26, 134],[27, 133],[28, 135],[29, 135],[30, 137],[31, 136],[33, 137],[32, 138]])

export const light_warning_Button = n32
export const light_warning_SliderTrackActive = n32
const n33 = t([[26, 133],[27, 132],[28, 134],[29, 134],[30, 136],[31, 135],[33, 136],[32, 137]])

export const light_warning_Checkbox = n33
export const light_warning_Switch = n33
export const light_warning_TooltipContent = n33
export const light_warning_RadioGroupItem = n33
const n34 = t([[0, 1],[1, 0],[2, 224],[3, 224],[4, 224],[5, 224],[6, 143],[7, 144],[8, 145],[9, 146],[10, 142],[11, 141],[12, 140],[13, 139],[14, 138],[15, 137],[16, 136],[17, 135],[18, 134],[19, 133],[20, 132],[21, 131],[22, 127],[23, 128],[24, 129],[25, 130],[26, 142],[27, 146],[28, 141],[29, 141],[30, 139],[31, 140],[32, 138],[33, 139],[34, 131],[35, 132],[36, 131],[37, 132],[38, 127],[39, 134],[40, 128]])

export const light_warning_SwitchThumb = n34
export const light_warning_SliderThumb = n34
export const light_warning_Tooltip = n34
export const light_warning_ProgressIndicator = n34
const n35 = t([[26, 152],[27, 151],[28, 153],[29, 153],[30, 155],[31, 154],[33, 155],[32, 156]])

export const light_success_ListItem = n35
export const light_success_SelectTrigger = n35
export const light_success_Card = n35
export const light_success_Progress = n35
export const light_success_TooltipArrow = n35
export const light_success_SliderTrack = n35
export const light_success_Input = n35
export const light_success_TextArea = n35
const n36 = t([[26, 154],[27, 153],[28, 155],[29, 155],[30, 157],[31, 156],[33, 157],[32, 158]])

export const light_success_Button = n36
export const light_success_SliderTrackActive = n36
const n37 = t([[26, 153],[27, 152],[28, 154],[29, 154],[30, 156],[31, 155],[33, 156],[32, 157]])

export const light_success_Checkbox = n37
export const light_success_Switch = n37
export const light_success_TooltipContent = n37
export const light_success_RadioGroupItem = n37
const n38 = t([[0, 1],[1, 0],[2, 224],[3, 224],[4, 224],[5, 224],[6, 163],[7, 164],[8, 165],[9, 166],[10, 162],[11, 161],[12, 160],[13, 159],[14, 158],[15, 157],[16, 156],[17, 155],[18, 154],[19, 153],[20, 152],[21, 151],[22, 147],[23, 148],[24, 149],[25, 150],[26, 162],[27, 166],[28, 161],[29, 161],[30, 159],[31, 160],[32, 158],[33, 159],[34, 151],[35, 152],[36, 151],[37, 152],[38, 147],[39, 154],[40, 148]])

export const light_success_SwitchThumb = n38
export const light_success_SliderThumb = n38
export const light_success_Tooltip = n38
export const light_success_ProgressIndicator = n38
const n39 = t([[26, 172],[27, 173],[28, 171],[29, 171],[30, 175],[31, 176],[33, 175],[32, 174]])

export const dark_error_ListItem = n39
export const dark_error_SelectTrigger = n39
export const dark_error_Card = n39
export const dark_error_Progress = n39
export const dark_error_TooltipArrow = n39
export const dark_error_SliderTrack = n39
export const dark_error_Input = n39
export const dark_error_TextArea = n39
const n40 = t([[26, 174],[27, 175],[28, 173],[29, 173],[30, 177],[31, 178],[33, 177],[32, 176]])

export const dark_error_Button = n40
export const dark_error_SliderTrackActive = n40
const n41 = t([[26, 173],[27, 174],[28, 172],[29, 172],[30, 176],[31, 177],[33, 176],[32, 175]])

export const dark_error_Checkbox = n41
export const dark_error_Switch = n41
export const dark_error_TooltipContent = n41
export const dark_error_RadioGroupItem = n41
const n42 = t([[0, 11],[1, 16],[2, 224],[3, 224],[4, 224],[5, 224],[6, 182],[7, 183],[8, 184],[9, 185],[10, 181],[11, 180],[12, 179],[13, 119],[14, 178],[15, 177],[16, 176],[17, 175],[18, 174],[19, 173],[20, 172],[21, 171],[22, 167],[23, 168],[24, 169],[25, 170],[26, 181],[27, 180],[28, 185],[29, 185],[30, 119],[31, 178],[32, 179],[33, 119],[34, 171],[35, 172],[36, 171],[37, 172],[38, 167],[39, 174],[40, 168]])

export const dark_error_SwitchThumb = n42
export const dark_error_SliderThumb = n42
export const dark_error_Tooltip = n42
export const dark_error_ProgressIndicator = n42
const n43 = t([[26, 191],[27, 192],[28, 190],[29, 190],[30, 194],[31, 195],[33, 194],[32, 193]])

export const dark_warning_ListItem = n43
export const dark_warning_SelectTrigger = n43
export const dark_warning_Card = n43
export const dark_warning_Progress = n43
export const dark_warning_TooltipArrow = n43
export const dark_warning_SliderTrack = n43
export const dark_warning_Input = n43
export const dark_warning_TextArea = n43
const n44 = t([[26, 193],[27, 194],[28, 192],[29, 192],[30, 196],[31, 197],[33, 196],[32, 195]])

export const dark_warning_Button = n44
export const dark_warning_SliderTrackActive = n44
const n45 = t([[26, 192],[27, 193],[28, 191],[29, 191],[30, 195],[31, 196],[33, 195],[32, 194]])

export const dark_warning_Checkbox = n45
export const dark_warning_Switch = n45
export const dark_warning_TooltipContent = n45
export const dark_warning_RadioGroupItem = n45
const n46 = t([[0, 11],[1, 16],[2, 224],[3, 224],[4, 224],[5, 224],[6, 201],[7, 202],[8, 203],[9, 204],[10, 200],[11, 199],[12, 198],[13, 139],[14, 197],[15, 196],[16, 195],[17, 194],[18, 193],[19, 192],[20, 191],[21, 190],[22, 186],[23, 187],[24, 188],[25, 189],[26, 200],[27, 199],[28, 204],[29, 204],[30, 139],[31, 197],[32, 198],[33, 139],[34, 190],[35, 191],[36, 190],[37, 191],[38, 186],[39, 193],[40, 187]])

export const dark_warning_SwitchThumb = n46
export const dark_warning_SliderThumb = n46
export const dark_warning_Tooltip = n46
export const dark_warning_ProgressIndicator = n46
const n47 = t([[26, 210],[27, 211],[28, 209],[29, 209],[30, 213],[31, 214],[33, 213],[32, 212]])

export const dark_success_ListItem = n47
export const dark_success_SelectTrigger = n47
export const dark_success_Card = n47
export const dark_success_Progress = n47
export const dark_success_TooltipArrow = n47
export const dark_success_SliderTrack = n47
export const dark_success_Input = n47
export const dark_success_TextArea = n47
const n48 = t([[26, 212],[27, 213],[28, 211],[29, 211],[30, 215],[31, 216],[33, 215],[32, 214]])

export const dark_success_Button = n48
export const dark_success_SliderTrackActive = n48
const n49 = t([[26, 211],[27, 212],[28, 210],[29, 210],[30, 214],[31, 215],[33, 214],[32, 213]])

export const dark_success_Checkbox = n49
export const dark_success_Switch = n49
export const dark_success_TooltipContent = n49
export const dark_success_RadioGroupItem = n49
const n50 = t([[0, 11],[1, 16],[2, 224],[3, 224],[4, 224],[5, 224],[6, 220],[7, 221],[8, 222],[9, 223],[10, 219],[11, 218],[12, 217],[13, 159],[14, 216],[15, 215],[16, 214],[17, 213],[18, 212],[19, 211],[20, 210],[21, 209],[22, 205],[23, 206],[24, 207],[25, 208],[26, 219],[27, 218],[28, 223],[29, 223],[30, 159],[31, 216],[32, 217],[33, 159],[34, 209],[35, 210],[36, 209],[37, 210],[38, 205],[39, 212],[40, 206]])

export const dark_success_SwitchThumb = n50
export const dark_success_SliderThumb = n50
export const dark_success_Tooltip = n50
export const dark_success_ProgressIndicator = n50