import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayersService {
  public players = [
    {
      names: 'Ronald Araújo',
      imgURL:
        'https://www.fcbarcelona.com/photo-resources/2022/07/01/5e7ec920-d018-41e8-b783-9990cd53fc78/araujo.png?width=670&height=790',
      info: 'Defensa',
    },
    {
      names: 'Pedri',
      imgURL:
        'https://www.fcbarcelona.com/photo-resources/2022/07/01/6c5b1089-95a7-4599-bb04-c91235363747/pedri.png?width=670&height=790',
      info: 'Centrocampista',
    },
  ];
}
