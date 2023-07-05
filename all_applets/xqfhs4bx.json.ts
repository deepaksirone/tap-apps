//###################################################################
//Let's define Server Image Filenames & unsplash photo ids
//###################################################################



var serverArray: Array<string> = ['ig1', 'ig2', 'ig3', 'ig4', 'ig5'];    

var randServer: Array<string> = serverArray[Math.floor(Math.random() * serverArray.length)];

var unsplashArray: Array<string> = ['lQvb9eKjoh8', '6rhCPaBVKgc', 'Sd9A6NVHsd4', 'CCjgYjUudxE', 'DtVECle--s8', 'qr4d407hSjo', 't1hLJ-EDEvE', 'P1CadeRWSws', 'I18xmTwTOwI', 'Gn64mz9hTqE', '20ADkxmD-S8', '055ft9gPAjY', '8lORLCQH_1g', 'T74Wgg2flOw', 'rVRnrcifivM', 'MoJ6PgcIUuU', 'sxsxeQl41qc', 'hZvgE48GymI', 'feWi-_mR52M', 's313y8DpjSo', 'FMFOFQfchfs', '9P7WD1dU5VQ', 'wp5Ua7jY52w', 'LIaLQ2SIQuk', 'N_enD_8s3nI', 'rlFMOAkLQRc', '1FWICvPQdkY', 'cvYRv-1T6xo', '--i46xFw6GA', 'g7FYjvVLlkc', 'VXPtggPOpcA', 'g62viwwidTA', 'tT-t-qPCruo', 'r-KfktlyBL0', 'KrBFVvQtWQU', 'ZsDCqTjxri0', 'GX8KBbVmC6c', 'kB_KKcp8uTw', 'T5lmpSYxnSU', 'mRMQwK513hY', 'dHZi6rn1MGE', 'PmpMQDiQ2F8', 'onLbXleIkds', '3BK_DyRVf90', 'mY1zOqX61yQ', 'EMZ5LqfuzV8', 'll3fwwExWc0', 'IKBQlEZwM2I', 'NiGlB_LallY', 'QLqNalPe0RA', 'eya7vX50lb0', 'EbivdbB83Y0', 'Px3iBXV-4TU', 'bwtgal6MJLM', 'LVrB6jvCIp4', 'WDx0B9aFNNU', 'crwBSzp6xhk', 'P2BoE6tb8ig', '24vjqGCu0pI', '8YGlKdHy6kg', '6bKpHAun4d8', 'zAOBpEE_vV4', 'C05KN4h8WKw', 'sG-PR0BNwb4', '4QTfjewH4RU', 'H5dvxEthWdo', '0R1ci4Rb9jU', 'OkhcMbf3vQ0', 'WvUCI4ZZ134', 'c2FAMnQaCDE', 'w8HTBRcsmNo', '2y6s0qKdGZg', 'yfhxyzE1zJc', '2TCy8pqFXsE', 'RLJnH4Mt9A0', 'ACrTnL4mDL4', 'M7mu6jXlcns', 'B6aJYT5wxkk', 'H6HNYGsyeKQ', 'NizoYtO0yiY', '5QtljRBjz5g', '-S6ZIaONSMA', 'ukxAK0c2FqM', 'RUfnlBA_9Iw', 'I4jC9D7r8Nc', 'hmIFzdQ6U5k', 'hnsRM5imNyM', 'pVfvdZZ2pnc', 'cWhLlFB2IGI', 'khGqQIFS6VE', 'lPWSIC2OjUs', 'KYyxepFp3QY', 'vb_V6W1nmeA', 'd6pLNFVZt_4', 'o3blscJLGr0', 'AgD6OBNXF0Q', 'sO7IAkgc65A', 'wN1GckYPNUs', 'eCJiD00AJqs', 'NnTQBkBkU9g', 'hv8w4wVDkrg', '9RGPG_ksS3Q', 'pw_Ube1_rhs', 'ffrz0YeWAQY', 'JP32m0_-AHQ', 'IwVRO3TLjLc', 'b9xUX3HR5nQ', 'WrmMvAMuPOo', 'oXHu7dhIiIM', 'tgmGOhXVuoI', '3-VLBL1DKxk', 'Dl6H4_nzBpE', 'wmBxoh8VISY', 'oMwEHgCrHJA', 'pLnOX9My2tA', 'wZz4oS9ZOMo', 'gUfC5L-ROPg', '8-GAoVpIk4M', 'nkpqYiQ33T0', 'F2iRD14uF7A', 'KTzZVDjUsXw', '6KiWWVs48LM', 'tj65hBoe3CU', 'XetxretiMS0', 'mKxdiW2QEkE', 'Tymrm3l36Dk', 'gw8EYwxJxsU', 'LGOw_QZ8DQ8', 'fjUWDEWkw8U', '8xDcB_vQTNo', 'LChRdVLxvbI', 'TnNo84AJJ5A', 'G-SCNTzpDEE', 'ipxnkyzX13U', '3LTht2nxd34', 'ZlDnZb3i15Y', 't4NvUGv1834', 'rpADsIWA0JI', 'FBXuXp57eM0', 'ocY2jXVSz88', 'dlxLGIy-2VU', 'JzdI4siI7UA', 'Gf4WV2qyW2U', 'lVXdvblhKds', 'XwdSGEiOahM', '47C_M0Lg2Y0', 'Du5g-fwvcQc', '54hUU5pNSvo', '8AQFQk-ESlk', 'fDsCIIGdw9g', 'tOVmshavtoo', 'mXQyEcINwa8', '05_sUnshoaE', 'S8E5a5ZlkNc', 'CpuDiVqtRJg', '4Ia348kvX7A', 'zu-OdjJRa0w', 'UE2PZgPB7JA', 'v-m0iXX33bk', 'MP0bgaS_d1c', 'Uto4sJ8e_5k', 'GwNsgnSAfQM', 'l1xuT0eR56E', '5kmqbZ3iwsk', '4rLP56UBANM', '9O1oQ9SzQZQ', 'OnCwsPHn3Gw', '-9kXwpU1Pw4', '2qlurUeoi3A', 'VLeQQkD8Jpo', 'wK3nMle_l38', '6Mq_L_tXZO4', 'uE_N2i6-TRM', 'IFUwpyV8Igg', 'Y3L_ZQaw9Wo', 'QHI4_13y9Tk', '-NNyXVQH9Ho', 'pUvMN3j2kGc', 'QeVmJxZOv3k', 't8TJvLnu19I', 'GnNmbvN6R64', '6K4xvAMzF7Q', 'NEc3YEN1FFw', 'u1Ed8Nwk6TQ', 'AeZncpkqMVU', 'v3CzPH_f8Qc', 'vPFbVB7DPZI', '44r527HkUh0', 'dO3qTKxwik0', 'gmrvh0XQmk4', 'fn4uauBFVP8', '_tDIufiMGXA', 'vH96q7p1sgw', 'ZoPg1SDXYmg', 'sqZb9Y70Gyg', 'DrnOxsTcUMg', 'H6clJErbJ4E', '8Nc_oQsc2qQ', 'nM1FZ-SCXnE', '8i2fHtStfxk', 'iz_j6rv3vQk', 'sQ6t5v95npU', '0RGH5Xl9ytg', 'nSrY5fJ4B60', 'Xh6BpT-1tXo', 'CtYa63cAtl4', 'bivUtyUT6mk', '6LZuSzSwso0', 'xP7y_SbKxMM', 'JDsXQMAx-UY', 'A-Yv_PB7iak', 'hcs5KxfmVnQ', '9KKrMQnd_3o', '_l44nkOMSPE', 'NOMsBPYDePM', '09SxeOdtlPE', 'r83Vnlcsfo8', 'iM6j8dU-Qdk', '7CutZw_Td2s', 'd1fDmShBtIk', 'O0T1SIgHAfM', 'zdSoe8za6Hs', 'UuiO38nffBQ', 'U-ouhtPgHH4', '_rNRaOHZtLA', 'qOYUf1rxpnk', 'ZN97BfWuHhs', 'KbUb9A46lV8', 'gMQBphWUMQ0', 'loivQnpVtgI', 'wsMwDxF8SKA', 'PypjzKTUqLo', '-RBuQ2PK_L8', '8WCMVvEWRqk', 'BE9AifuJfD4', 'aTkJ13pvOd8', 'pr4TVTwPHM0', '-bEZ_OfWu3Y', 'IuLgi9PWETU', 'zi2zXhEFbiA', 'rS1GogPLVHk', 'JkvZaqrzrTo', 'IndbOxCrVio', '91zFxX-LBuE', 'B0sI8VxEwk8', 'GJ6QCO9Re-c', 'FDRkXLrM_6Y', '505eectW54k', '4hH8MJBQYYE', '9l_326FISzk', '9pv2NMKmP7w', 'KD0DYW6qBYQ', 'OVlFXzeAoqQ', 'D5c_XKM2tkE', 'WOzVqzpScrk', 'JJriiwCxutM', 'PeRNNIGmoNU', 'WHWYBmtn3_0', 'Qx5QNarbrUM', '7k7E_WGfE90', 'KyUmKlXrhAM', 'pJn9WhMqFIs', 'E9B0JN25RRo', 'T3mKJXfdims', '1qkyck-UL3g', 'GiIZSko7Guk', 'nXo2ZsKHTHg', 'r90oRwfZEbE', 'eMMxokmBSik', 'WcXxxQYp_aM', 'ZiB_dfBDKdE', 'yu68fUQDvOI', 'jtvGydbUn30', 'aw4ctKdmC7k', 'gM9XBRSX41o', 'UGR7ArHKqcc', 'B5sNgRtYPQ4', 'LFRM-HkqVpM', 'djbUIKsUMaw', 'P_p4NGz5Cb4', 'KcufLkTXYy4', 'HPTjNm_EMGc', 'jkDLNDGougw', 'jiv4NngVq9U', 'VL9ugqp_mko', 'srUZ7gzaPog', 'L58BveBr1FM', '5LBIuI7c_ps', 'heEPoapeiVk'];    

var randUnsplash = unsplashArray[Math.floor(Math.random() * unsplashArray.length)];



//###################################################################
//Let's define the description parts 1, 2 & 3 for UNSPLASH
//###################################################################



var Desc1: Array<string> = ['Enjoy Your Fashion!', 'Have Some Fun In The World Today!', 'Aww the Fashion!', 'Fashion vibes anyone?', 'Get Me To The Fashionshow!', 'Who is ready for the weekend?', 'Blog so hard...', 'Open your eyes to the beauty around you!', 'Dont forget your sunscreen today!', 'Let us remember.', 'Take a minute to stop and breathe.', 'How is everyones day going?'];    

var randDesc1 = Desc1[Math.floor(Math.random() * Desc1.length)];


var Desc2: Array<string> = ['We think youll really like the link in our bio.', 'Link in bio 😙', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];    

var randDesc2 = Desc2[Math.floor(Math.random() * Desc2.length)];


var Desc3: Array<string> = ['#fashionmodel #fashion2018 #trendyfashion', '#hotstyles #hottrends', '#blogger #fashionblog #fashionblogger', ' ', ' ', ' ', ' ', ' ', ' '];    

var randDesc3 = Desc3[Math.floor(Math.random() * Desc3.length)];


//###################################################################
//Let's define the description parts 1, 2 & 3 for SERVER
//###################################################################



var serverDesc1: Array<string> = ['So Cute!', 'Stunnning.', 'Beautiful.', 'Wow 😍'];    

var randServerDesc1 = serverDesc1[Math.floor(Math.random() * serverDesc1.length)];


var serverDesc2: Array<string> = ['Follow @thealyssamorrison for more!','Check out @thealyssamorrison for her gorgeous profile!','Photo Credit: @thealyssamorrison','Model: @thealyssamorrison'];    

var randServerDesc2 = serverDesc2[Math.floor(Math.random() * serverDesc2.length)];


var serverDesc3: Array<string> = ['#fashionmodel #fashion2018 #trendyfashion', '#hotstyles #hottrends', '#blogger #fashionblog #fashionblogger', ' ', ' ', ' ', ' ', ' ', ' '];    

var randServerDesc3 = serverDesc3[Math.floor(Math.random() * serverDesc3.length)];



//###################################################################
//Let's decide if this will be an Unsplash Pic or a Server Pic (Self)
//###################################################################



var maximum = 8;
var minimum = 1;
var randomNumero = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

if (randomNumero == 1) {


Buffer.addToBufferWithPhoto.setPhotoUrl("http://essentiallyty.com/ig/" + randServer + ".jpg");

Buffer.addToBufferWithPhoto.setMessage(randServerDesc1 + " " + randServerDesc2 + " " + randServerDesc3);

}else{

Buffer.addToBufferWithPhoto.setPhotoUrl("https://source.unsplash.com/" + randUnsplash + "/800x800");

Buffer.addToBufferWithPhoto.setMessage(randDesc1 + " " + randDesc2 + " " + randDesc3);


}
