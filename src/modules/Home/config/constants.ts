import { icons } from '@libs/Icons';
import bg from "../../../../public/droom-bg.png";
import droom from "../../../../public/droom-1.png";
import slider1 from '../../../images/latest blog/image1.jpg';
import slider2 from '../../../images/latest blog/image2.jpg';
import slider3 from '../../../images/latest blog/Image3.jpg';

export const home_data = {
 
  //////////////////////////////////////////////////Choose US //////////////////////////////////////
  droom_data: {
    img1: bg,
    img2: droom, 
    title: 'Onze droom',
    description:
      'We streven ernaar landbouw op een slimme manier te vergroenen, zonder in te boeten op productie. Stel je een groene dooradering voor die Europa doorkruist, waar natuur en landbouw harmonieus samenkomen. Een plek waar een hert van Polen naar Portugal kan lopen, onder een weelderig bladerdak, door bossen en velden, zonder ooit het gevoel te hebben de veilige groene haven van de natuur te verlaten.',
 
      list: {
      text1: 'Slimme groene landbouw',
      text2: 'Een groen netwerk door heel Europa',
      text3: 'Harmonie tussen natuur en landbouw',
      text4: 'Vrij bewegende wilde dieren',
      text5: 'Een aaneengesloten weelderig bladerdak',
      text6: 'Veilige groene havens',


    },
  },

  
  //////////////////////////////////////////////////////////////// lATEST BLOG ///////////////////////////////////////////////////
  latest_blog: {
    title: 'Our Latest Blog',
    card_list: [
      {
        caption: 'How To Fix My PC That Won’t Turn On?',
        description:
          "Everybody wants a computer that 'just works' without hassle, but speed and performance can only be ensured by regular computer ...",
        image: slider1,
        tags: ['Computer', 'Repair'],
      },
      {
        caption: 'Top 10 Essential Computer Maintenance Tips',
        description:
          'Does your Gaming PC turn on, but there’s no display? Or perhaps your PC doesn’t turn on at all? When a computer doesn’t turn on, we...',
        image: slider2,
        tags: ['Computer', 'Maintenance', 'Tips'],
      },
      {
        caption: '10 Computer Repair Tips to Speed up Your Slow PC',
        description:
          'No matter how expensive and sophisticated your computer is, it can slow down over time. That’s because all machines need regular repair and ...',
        image: slider3,
        tags: ['Computer', 'Repair'],
      },
    ],
  },
};
