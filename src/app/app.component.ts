import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCollapsed = false;
  currentActiveResouce = { label: '1337x', key: '1337x' }; 
  resoureceList = [
    { label: '1337x', key: '1337x' },
    { label: 'Yts', key: 'yts' },
    { label: 'Eztv', key: 'eztv' },
    { label: 'Torrent Galaxy', key: 'tgx' },
    { label: 'Torlock', key: 'torlock' },
    { label: 'PirateBay', key: 'piratebay' },
    { label: 'Nyaasi', key: 'nyaasi' },
    { label: 'Rarbg', key: 'rarbg' },
    { label: 'Ettv', key: 'ettv' },
    { label: 'Zooqle', key: 'zooqle' },
    { label: 'KickAss', key: 'kickass' },
    { label: 'Bitsearch', key: 'bitsearch' },
    { label: 'Glodls', key: 'glodls' },
    { label: 'MagnetDL', key: 'magnetdl' },
    { label: 'LimeTorrent', key: 'limetorrent' },
    { label: 'TorrentFunk', key: 'torrentfunk' },
    { label: 'TorrentProject', key: 'torrentproject' },
  ];

  onClickHandler(newValue:any){
    this.currentActiveResouce= newValue;
  }
}
