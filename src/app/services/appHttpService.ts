import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppHttpService {
  public currentActiveResouce = { label: '1337x', key: '1337x' }; 
  constructor(private http: HttpClient) {}
  get(URL: string) {
    return new Observable((obs)=>{
      obs.next([
        {
          "Name": "Dead Space",
          "ReleasedDate": "1991",
          "Genre": "Horror / Sci-Fi",
          "Rating": "⭐",
          "Likes": "6",
          "Runtime": "1 hr 18 min",
          "Language": "English 2.0",
          "rr": "https://plus.unsplash.com/premium_photo-1664301778733-4810d1a19072?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "Poster": "https://plus.unsplash.com/premium_photo-1664301778733-4810d1a19072?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "Files": [
            {
              "Quality": "720p",
              "Type": "BluRay ",
              "Size": "720.2 MB",
              "Torrent": "https://yts.mx/torrent/download/25164D87C2EB5158EF5D0BB3D082A05C7675D71F",
              "Magnet": "magnet:?xt=urn:btih:25164D87C2EB5158EF5D0BB3D082A05C7675D71F&dn=Dead+Space+%281991%29+%5B720p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "1080p",
              "Type": "BluRay ",
              "Size": "1.3 GB",
              "Torrent": "https://yts.mx/torrent/download/86378BCAF56BBE266FD4B95C19E4EA6F47F1085D",
              "Magnet": "magnet:?xt=urn:btih:86378BCAF56BBE266FD4B95C19E4EA6F47F1085D&dn=Dead+Space+%281991%29+%5B1080p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            }
          ]
        },
        {
          "Name": "I'm Not Scared",
          "ReleasedDate": "2003 [ITALIAN]",
          "Genre": "Action / Crime / Drama / Mystery / Thriller",
          "Rating": "7.4 ⭐",
          "Likes": "10",
          "Runtime": "1 hr 41 min",
          "Language": "English 2.0",
          "Url": "https://yts.mx/movies/im-not-scared-2003",
          "Poster": "https://img.yts.mx/assets/images/movies/im_not_scared_2003/medium-cover.jpg",
          "Files": [
            {
              "Quality": "720p",
              "Type": "WEB ",
              "Size": "929.08 MB",
              "Torrent": "https://yts.mx/torrent/download/A53B3C18759B876D6863233A7AD022537A6B3EFE",
              "Magnet": "magnet:?xt=urn:btih:A53B3C18759B876D6863233A7AD022537A6B3EFE&dn=I%27m+Not+Scared+%282003%29+%5B720p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "1080p",
              "Type": "WEB ",
              "Size": "1.87 GB",
              "Torrent": "https://yts.mx/torrent/download/4528CB2C24DB9E14ACFEA6F95ACB46329D18409E",
              "Magnet": "magnet:?xt=urn:btih:4528CB2C24DB9E14ACFEA6F95ACB46329D18409E&dn=I%27m+Not+Scared+%282003%29+%5B1080p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            }
          ]
        },
        {
          "Name": "Born in Flames",
          "ReleasedDate": "1983",
          "Genre": "Action / Comedy / Drama / Sci-Fi",
          "Rating": "6.5 ⭐",
          "Likes": "6",
          "Runtime": "1 hr 20 min",
          "Language": "English 2.0",
          "Url": "https://yts.mx/movies/born-in-flames-1983",
          "Poster": "https://img.yts.mx/assets/images/movies/born_in_flames_1983/medium-cover.jpg",
          "Files": [
            {
              "Quality": "720p",
              "Type": "BluRay ",
              "Size": "738.07 MB",
              "Torrent": "https://yts.mx/torrent/download/6DB6B101A734D5D6E887124378314D1B6453EE16",
              "Magnet": "magnet:?xt=urn:btih:6DB6B101A734D5D6E887124378314D1B6453EE16&dn=Born+in+Flames+%281983%29+%5B720p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "1080p",
              "Type": "BluRay ",
              "Size": "1.34 GB",
              "Torrent": "https://yts.mx/torrent/download/73A2D5BE2C56FC58975C871CCCD6E43AB9FFEE3F",
              "Magnet": "magnet:?xt=urn:btih:73A2D5BE2C56FC58975C871CCCD6E43AB9FFEE3F&dn=Born+in+Flames+%281983%29+%5B1080p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "720p",
              "Type": "WEB ",
              "Size": "736.28 MB",
              "Torrent": "https://yts.mx/torrent/download/19F9A55309A274A10D352EE58839877ED7ED7934",
              "Magnet": "magnet:?xt=urn:btih:19F9A55309A274A10D352EE58839877ED7ED7934&dn=Born+in+Flames+%281983%29+%5B720p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "1080p",
              "Type": "WEB ",
              "Size": "1.33 GB",
              "Torrent": "https://yts.mx/torrent/download/031D9DC80C1AB786D6328996FDF64677C929CAD5",
              "Magnet": "magnet:?xt=urn:btih:031D9DC80C1AB786D6328996FDF64677C929CAD5&dn=Born+in+Flames+%281983%29+%5B1080p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            }
          ]
        },
        {
          "Name": "Don't Look Now",
          "ReleasedDate": "1973",
          "Genre": "Action / Drama / Horror / Mystery / Thriller",
          "Rating": "7.1 ⭐",
          "Likes": "28",
          "Runtime": "1 hr 50 min",
          "Language": "English 2.0",
          "Url": "https://yts.mx/movies/dont-look-now-1973",
          "Poster": "https://img.yts.mx/assets/images/movies/dont_look_now_1973/medium-cover.jpg",
          "Files": [
            {
              "Quality": "720p",
              "Type": "BluRay ",
              "Size": "907.12 MB",
              "Torrent": "https://yts.mx/torrent/download/20F680A6E909A922D4D87C53EA83834A55423B57",
              "Magnet": "magnet:?xt=urn:btih:20F680A6E909A922D4D87C53EA83834A55423B57&dn=Don%27t+Look+Now+%281973%29+%5B720p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "1080p",
              "Type": "BluRay ",
              "Size": "1.73 GB",
              "Torrent": "https://yts.mx/torrent/download/F37EC686B61B622659E56050C5DC36CAD0104341",
              "Magnet": "magnet:?xt=urn:btih:F37EC686B61B622659E56050C5DC36CAD0104341&dn=Don%27t+Look+Now+%281973%29+%5B1080p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            }
          ]
        },
        {
          "Name": "Firestarter",
          "ReleasedDate": "1984",
          "Genre": "Action / Horror / Sci-Fi / Thriller",
          "Rating": "6.1 ⭐",
          "Likes": "39",
          "Runtime": "1 hr 54 min",
          "Language": "English 2.0",
          "Url": "https://yts.mx/movies/firestarter-1984",
          "Poster": "https://img.yts.mx/assets/images/movies/Firestarter_1984/medium-cover.jpg",
          "Files": [
            {
              "Quality": "720p",
              "Type": "BluRay *",
              "Size": "1.03 GB",
              "Torrent": "https://yts.mx/torrent/download/B42E3C28A1EB0B6A8E17F25A67BDB0228503F860",
              "Magnet": "magnet:?xt=urn:btih:B42E3C28A1EB0B6A8E17F25A67BDB0228503F860&dn=Firestarter+%281984%29+%5B720p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "1080p",
              "Type": "BluRay *",
              "Size": "1.91 GB",
              "Torrent": "https://yts.mx/torrent/download/4008BA03320053F711FC5BCEA64A0D87FC509878",
              "Magnet": "magnet:?xt=urn:btih:4008BA03320053F711FC5BCEA64A0D87FC509878&dn=Firestarter+%281984%29+%5B1080p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            }
          ]
        },
        {
          "Name": "The Apprenticeship of Duddy Kravitz",
          "ReleasedDate": "1974",
          "Genre": "Comedy / Drama",
          "Rating": "6.7 ⭐",
          "Likes": "1",
          "Runtime": "2 hr 1 min",
          "Language": "English 2.0",
          "Url": "https://yts.mx/movies/the-apprenticeship-of-duddy-kravitz-1974",
          "Poster": "https://img.yts.mx/assets/images/movies/the_apprenticeship_of_duddy_kravitz_1974/medium-cover.jpg",
          "Files": [
            {
              "Quality": "720p",
              "Type": "BluRay ",
              "Size": "1.09 GB",
              "Torrent": "https://yts.mx/torrent/download/3FD38247708BA2E9453E2CC7ED6104544391D108",
              "Magnet": "magnet:?xt=urn:btih:3FD38247708BA2E9453E2CC7ED6104544391D108&dn=The+Apprenticeship+of+Duddy+Kravitz+%281974%29+%5B720p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "1080p",
              "Type": "BluRay ",
              "Size": "2.02 GB",
              "Torrent": "https://yts.mx/torrent/download/9B0D448EB328EE70190D906DD5AD9E137C910859",
              "Magnet": "magnet:?xt=urn:btih:9B0D448EB328EE70190D906DD5AD9E137C910859&dn=The+Apprenticeship+of+Duddy+Kravitz+%281974%29+%5B1080p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            }
          ]
        },
        {
          "Name": "Born Free",
          "ReleasedDate": "1966",
          "Genre": "Action / Adventure / Biography / Drama / Family / History",
          "Rating": "7.2 ⭐",
          "Likes": "21",
          "Runtime": "1 hr 35 min",
          "Language": "English 2.0",
          "Url": "https://yts.mx/movies/born-free-1966",
          "Poster": "https://img.yts.mx/assets/images/movies/born_free_1966/medium-cover.jpg",
          "Files": [
            {
              "Quality": "720p",
              "Type": "BluRay ",
              "Size": "678 MB",
              "Torrent": "https://yts.mx/torrent/download/104C44FFD575F8B9F4B203B7FC4ADD8407AE0048",
              "Magnet": "magnet:?xt=urn:btih:104C44FFD575F8B9F4B203B7FC4ADD8407AE0048&dn=Born+Free+%281966%29+%5B720p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "1080p",
              "Type": "BluRay ",
              "Size": "1.43 GB",
              "Torrent": "https://yts.mx/torrent/download/5BCDD2599F94A44FF0822918210AF137C1A7E50A",
              "Magnet": "magnet:?xt=urn:btih:5BCDD2599F94A44FF0822918210AF137C1A7E50A&dn=Born+Free+%281966%29+%5B1080p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            }
          ]
        },
        {
          "Name": "Who's Afraid of Virginia Woolf?",
          "ReleasedDate": "1966",
          "Genre": "Action / Drama",
          "Rating": "8.0 ⭐",
          "Likes": "47",
          "Runtime": "2 hr 11 min",
          "Language": "English 2.0",
          "Url": "https://yts.mx/movies/whos-afraid-of-virginia-woolf-1966",
          "Poster": "https://img.yts.mx/assets/images/movies/whos_afraid_of_virginia_woolf_1966/medium-cover.jpg",
          "Files": [
            {
              "Quality": "720p",
              "Type": "BluRay ",
              "Size": "937.43 MB",
              "Torrent": "https://yts.mx/torrent/download/B3BC90B8A0C27E601A884C23E6B488069BEA9F52",
              "Magnet": "magnet:?xt=urn:btih:B3BC90B8A0C27E601A884C23E6B488069BEA9F52&dn=Who%27s+Afraid+of+Virginia+Woolf%3F+%281966%29+%5B720p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "1080p",
              "Type": "BluRay ",
              "Size": "1.97 GB",
              "Torrent": "https://yts.mx/torrent/download/102E600186EED62934AD54A90C860366A5FC4641",
              "Magnet": "magnet:?xt=urn:btih:102E600186EED62934AD54A90C860366A5FC4641&dn=Who%27s+Afraid+of+Virginia+Woolf%3F+%281966%29+%5B1080p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            }
          ]
        },
        {
          "Name": "DD Returns",
          "ReleasedDate": "2023 [TAMIL]",
          "Genre": "Action / Comedy / Horror",
          "Rating": "⭐",
          "Likes": "1",
          "Runtime": "1 hr 55 min",
          "Language": "Hindi 2.0",
          "Url": "https://yts.mx/movies/dd-returns-2023",
          "Poster": "https://img.yts.mx/assets/images/movies/dd_returns_2023/medium-cover.jpg",
          "Files": [
            {
              "Quality": "720p",
              "Type": "WEB ",
              "Size": "1.04 GB",
              "Torrent": "https://yts.mx/torrent/download/4B501E753CEEFA122AC13F9F63156B348FA8F2E3",
              "Magnet": "magnet:?xt=urn:btih:4B501E753CEEFA122AC13F9F63156B348FA8F2E3&dn=DD+Returns+%282023%29+%5B720p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "1080p",
              "Type": "WEB ",
              "Size": "1.93 GB",
              "Torrent": "https://yts.mx/torrent/download/90D5013B19A1A5FC5E397DA64003C82C4B23184C",
              "Magnet": "magnet:?xt=urn:btih:90D5013B19A1A5FC5E397DA64003C82C4B23184C&dn=DD+Returns+%282023%29+%5B1080p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "1080p",
              "Type": "WEB.x265.10bit ",
              "Size": "1.73 GB",
              "Torrent": "https://yts.mx/torrent/download/EECDF4F9559378FFC4F4E1EA11521BD3624FB5AC",
              "Magnet": "magnet:?xt=urn:btih:EECDF4F9559378FFC4F4E1EA11521BD3624FB5AC&dn=DD+Returns+%282023%29+%5B1080p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            }
          ]
        },
        {
          "Name": "Gone Mom",
          "ReleasedDate": "2021",
          "Genre": "Action / Crime / Drama",
          "Rating": "⭐",
          "Likes": "11",
          "Runtime": "1 hr 27 min",
          "Language": "English 2.0",
          "Url": "https://yts.mx/movies/gone-mom-2021",
          "Poster": "https://img.yts.mx/assets/images/movies/gone_mom_2021/medium-cover.jpg",
          "Files": [
            {
              "Quality": "720p",
              "Type": "WEB ",
              "Size": "805.2 MB",
              "Torrent": "https://yts.mx/torrent/download/4871E074843B8019F7954A4007A9BB5E3438B6A6",
              "Magnet": "magnet:?xt=urn:btih:4871E074843B8019F7954A4007A9BB5E3438B6A6&dn=Gone+Mom+%282021%29+%5B720p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "1080p",
              "Type": "WEB ",
              "Size": "1.46 GB",
              "Torrent": "https://yts.mx/torrent/download/F46441C4CA321C45489F9CE4DC374E427DD4B19B",
              "Magnet": "magnet:?xt=urn:btih:F46441C4CA321C45489F9CE4DC374E427DD4B19B&dn=Gone+Mom+%282021%29+%5B1080p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            }
          ]
        },
        {
          "Name": "Born Reckless",
          "ReleasedDate": "1958",
          "Genre": "Action / Drama / Romance / Sport / Western",
          "Rating": "⭐",
          "Likes": "2",
          "Runtime": "1 hr 19 min",
          "Language": "English 2.0",
          "Url": "https://yts.mx/movies/born-reckless-1958",
          "Poster": "https://img.yts.mx/assets/images/movies/born_reckless_1958/medium-cover.jpg",
          "Files": [
            {
              "Quality": "720p",
              "Type": "WEB ",
              "Size": "733.59 MB",
              "Torrent": "https://yts.mx/torrent/download/8D2099527EF00EEDF3A255105E7E8E678B671536",
              "Magnet": "magnet:?xt=urn:btih:8D2099527EF00EEDF3A255105E7E8E678B671536&dn=Born+Reckless+%281958%29+%5B720p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "1080p",
              "Type": "WEB ",
              "Size": "1.33 GB",
              "Torrent": "https://yts.mx/torrent/download/4CB228B74FBFBA56EA2289F6971053BFAF33883C",
              "Magnet": "magnet:?xt=urn:btih:4CB228B74FBFBA56EA2289F6971053BFAF33883C&dn=Born+Reckless+%281958%29+%5B1080p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            }
          ]
        },
        {
          "Name": "Firestarter",
          "ReleasedDate": "2022",
          "Genre": "Action / Drama / Horror / Sci-Fi / Thriller",
          "Rating": "4.6 ⭐",
          "Likes": "105",
          "Runtime": "1 hr 34 min",
          "Language": "English 2.0",
          "Url": "https://yts.mx/movies/firestarter-2022",
          "Poster": "https://img.yts.mx/assets/images/movies/firestarter_2022/medium-cover.jpg",
          "Files": [
            {
              "Quality": "720p",
              "Type": "BluRay ",
              "Size": "865.93 MB",
              "Torrent": "https://yts.mx/torrent/download/1A4D18BA3A3EA30D5AA7800ED8BEC67EF11CCA48",
              "Magnet": "magnet:?xt=urn:btih:1A4D18BA3A3EA30D5AA7800ED8BEC67EF11CCA48&dn=Firestarter+%282022%29+%5B720p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "1080p",
              "Type": "BluRay ",
              "Size": "1.74 GB",
              "Torrent": "https://yts.mx/torrent/download/C3FEFAED2650CF5AFA30A6B382E990E48D3AAD37",
              "Magnet": "magnet:?xt=urn:btih:C3FEFAED2650CF5AFA30A6B382E990E48D3AAD37&dn=Firestarter+%282022%29+%5B1080p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "720p",
              "Type": "WEB ",
              "Size": "866.56 MB",
              "Torrent": "https://yts.mx/torrent/download/D9F1353F0D32484C7493AE9491F33963D718EED0",
              "Magnet": "magnet:?xt=urn:btih:D9F1353F0D32484C7493AE9491F33963D718EED0&dn=Firestarter+%282022%29+%5B720p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "1080p",
              "Type": "WEB ",
              "Size": "1.74 GB",
              "Torrent": "https://yts.mx/torrent/download/CD58FDF198E0474197FD0DC6904D038A55F2D1CB",
              "Magnet": "magnet:?xt=urn:btih:CD58FDF198E0474197FD0DC6904D038A55F2D1CB&dn=Firestarter+%282022%29+%5B1080p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "2160p",
              "Type": "WEB.x265.10bit ",
              "Size": "4.21 GB",
              "Torrent": "https://yts.mx/torrent/download/DF28CDFB0F7AEDF1512F4EB7A0C899EDD7B3C756",
              "Magnet": "magnet:?xt=urn:btih:DF28CDFB0F7AEDF1512F4EB7A0C899EDD7B3C756&dn=Firestarter+%282022%29+%5B2160p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            }
          ]
        },
        {
          "Name": "Find Me Guilty",
          "ReleasedDate": "2006",
          "Genre": "Action / Biography / Comedy / Crime / Drama",
          "Rating": "7.0 ⭐",
          "Likes": "14",
          "Runtime": "2 hr 4 min",
          "Language": "English 2.0",
          "Url": "https://yts.mx/movies/find-me-guilty-2006",
          "Poster": "https://img.yts.mx/assets/images/movies/find_me_guilty_2006/medium-cover.jpg",
          "Files": [
            {
              "Quality": "720p",
              "Type": "BluRay ",
              "Size": "1.12 GB",
              "Torrent": "https://yts.mx/torrent/download/B44909D79767BEA6D99831D3B57CB62E2A1E06EC",
              "Magnet": "magnet:?xt=urn:btih:B44909D79767BEA6D99831D3B57CB62E2A1E06EC&dn=Find+Me+Guilty+%282006%29+%5B720p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "1080p",
              "Type": "BluRay ",
              "Size": "2.3 GB",
              "Torrent": "https://yts.mx/torrent/download/9B711C86C38B6D7AAE5FF1E9B10E361849158541",
              "Magnet": "magnet:?xt=urn:btih:9B711C86C38B6D7AAE5FF1E9B10E361849158541&dn=Find+Me+Guilty+%282006%29+%5B1080p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            }
          ]
        },
        {
          "Name": "Betrayed",
          "ReleasedDate": "1988",
          "Genre": "Action / Crime / Drama / Romance / Thriller",
          "Rating": "6.3 ⭐",
          "Likes": "13",
          "Runtime": "2 hr 7 min",
          "Language": "English 2.0",
          "Url": "https://yts.mx/movies/betrayed-1988",
          "Poster": "https://img.yts.mx/assets/images/movies/betrayed_1988/medium-cover.jpg",
          "Files": [
            {
              "Quality": "720p",
              "Type": "BluRay ",
              "Size": "958.24 MB",
              "Torrent": "https://yts.mx/torrent/download/43ED7E7C3FA14EF007D40EC8BCC494D1A4760714",
              "Magnet": "magnet:?xt=urn:btih:43ED7E7C3FA14EF007D40EC8BCC494D1A4760714&dn=Betrayed+%281988%29+%5B720p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "1080p",
              "Type": "BluRay ",
              "Size": "1.95 GB",
              "Torrent": "https://yts.mx/torrent/download/161B5B83AFDD7738343B4E86CF38126D9D3BE4C6",
              "Magnet": "magnet:?xt=urn:btih:161B5B83AFDD7738343B4E86CF38126D9D3BE4C6&dn=Betrayed+%281988%29+%5B1080p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            }
          ]
        },
        {
          "Name": "Born Yesterday",
          "ReleasedDate": "1950",
          "Genre": "Action / Comedy / Drama / Romance",
          "Rating": "7.5 ⭐",
          "Likes": "16",
          "Runtime": "1 hr 43 min",
          "Language": "English 2.0",
          "Url": "https://yts.mx/movies/born-yesterday-1950",
          "Poster": "https://img.yts.mx/assets/images/movies/Born_Yesterday_1950/medium-cover.jpg",
          "Files": [
            {
              "Quality": "720p",
              "Type": "BluRay ",
              "Size": "806.19 MB",
              "Torrent": "https://yts.mx/torrent/download/C8FC3CBF3640B1A673209D22C0624CBB526B3260",
              "Magnet": "magnet:?xt=urn:btih:C8FC3CBF3640B1A673209D22C0624CBB526B3260&dn=Born+Yesterday+%281950%29+%5B720p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "1080p",
              "Type": "BluRay ",
              "Size": "1.64 GB",
              "Torrent": "https://yts.mx/torrent/download/B4742E0F4B24217340722B7813EF8C3BC4333BD7",
              "Magnet": "magnet:?xt=urn:btih:B4742E0F4B24217340722B7813EF8C3BC4333BD7&dn=Born+Yesterday+%281950%29+%5B1080p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            }
          ]
        },
        {
          "Name": "Piranha 3DD",
          "ReleasedDate": "2012",
          "Genre": "Action / Comedy / Horror / Sci-Fi / Thriller",
          "Rating": "3.8 ⭐",
          "Likes": "70",
          "Runtime": "1 hr 23 min",
          "Language": "English 2.0",
          "Url": "https://yts.mx/movies/piranha-3dd-2012",
          "Poster": "https://img.yts.mx/assets/images/movies/Piranha_3DD_2012/medium-cover.jpg",
          "Files": [
            {
              "Quality": "3D",
              "Type": "BluRay ",
              "Size": "1.50 GB",
              "Torrent": "https://yts.mx/torrent/download/D2BE9B93E62E768FC26C8888F36C61F1A837FBD1",
              "Magnet": "magnet:?xt=urn:btih:D2BE9B93E62E768FC26C8888F36C61F1A837FBD1&dn=Piranha+3DD+%282012%29+%5B3D%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "720p",
              "Type": "BluRay ",
              "Size": "651.38 MB",
              "Torrent": "https://yts.mx/torrent/download/C6764185F2C4C8EAD86434C1B55230C2ED22B1B6",
              "Magnet": "magnet:?xt=urn:btih:C6764185F2C4C8EAD86434C1B55230C2ED22B1B6&dn=Piranha+3DD+%282012%29+%5B720p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "1080p",
              "Type": "BluRay ",
              "Size": "1.40 GB",
              "Torrent": "https://yts.mx/torrent/download/36E8EF1750A4A216817303C14648F596A3021712",
              "Magnet": "magnet:?xt=urn:btih:36E8EF1750A4A216817303C14648F596A3021712&dn=Piranha+3DD+%282012%29+%5B1080p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            }
          ]
        },
        {
          "Name": "Days of Glory",
          "ReleasedDate": "2006 [FRENCH]",
          "Genre": "Action / Drama / War",
          "Rating": "7.0 ⭐",
          "Likes": "8",
          "Runtime": "2 hr 3 min",
          "Language": "French 2.0",
          "Url": "https://yts.mx/movies/days-of-glory-2006",
          "Poster": "https://img.yts.mx/assets/images/movies/days_of_glory_2006/medium-cover.jpg",
          "Files": [
            {
              "Quality": "720p",
              "Type": "BluRay ",
              "Size": "1.11 GB",
              "Torrent": "https://yts.mx/torrent/download/ED937BE47AEBE9080D5C8637C04AFDD4692F4657",
              "Magnet": "magnet:?xt=urn:btih:ED937BE47AEBE9080D5C8637C04AFDD4692F4657&dn=Days+of+Glory+%282006%29+%5B720p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "1080p",
              "Type": "BluRay ",
              "Size": "2.28 GB",
              "Torrent": "https://yts.mx/torrent/download/288853F9CC5827170FDFE3C8EF148B967AB164AD",
              "Magnet": "magnet:?xt=urn:btih:288853F9CC5827170FDFE3C8EF148B967AB164AD&dn=Days+of+Glory+%282006%29+%5B1080p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            }
          ]
        },
        {
          "Name": "Born on the Fourth of July",
          "ReleasedDate": "1989",
          "Genre": "Action / Biography / Drama / War",
          "Rating": "7.2 ⭐",
          "Likes": "48",
          "Runtime": "2 hr 25 min",
          "Language": "Chinese 2.0",
          "Url": "https://yts.mx/movies/born-on-the-fourth-of-july-1989",
          "Poster": "https://img.yts.mx/assets/images/movies/born_on_the_fourth_of_july_1989/medium-cover.jpg",
          "Files": [
            {
              "Quality": "720p",
              "Type": "BluRay ",
              "Size": "1.19 GB",
              "Torrent": "https://yts.mx/torrent/download/10D9258C9BEAD53FE8237F8EE83249841A8E356A",
              "Magnet": "magnet:?xt=urn:btih:10D9258C9BEAD53FE8237F8EE83249841A8E356A&dn=Born+on+the+Fourth+of+July+%281989%29+%5B720p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            },
            {
              "Quality": "1080p",
              "Type": "BluRay ",
              "Size": "2.3 GB",
              "Torrent": "https://yts.mx/torrent/download/E0A78206E2DE2E25BB33F93CFAFE03E4BC34ABBF",
              "Magnet": "magnet:?xt=urn:btih:E0A78206E2DE2E25BB33F93CFAFE03E4BC34ABBF&dn=Born+on+the+Fourth+of+July+%281989%29+%5B1080p%5D+%5BYTS.MX%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fopen.tracker.cl%3A1337%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=https%3A%2F%2Fopentracker.i2p.rocks%3A443%2Fannounce"
            }
          ]
        }
      ])
    })
    // return this.http.get(URL, { responseType: 'json' });
  }
}
