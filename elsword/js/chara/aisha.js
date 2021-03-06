/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** アイシャのデータ型 */
var Aisha = function () {
	this.jobs = [
	  new Job("アイシャ", "aisha", "Aisha/Aisha.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Aisha/icon", "url"),
		  new Active("覚醒", "Awaking", 96, -1, 27, "", "00_awaking.png", "v49jk4jNdDE"),
		  new Active("ライトニングボルト", "Lightning Bolt", 30, 1, 0, "", "Aisha/Aisha04_Lightning Bolt.png", "BK_aK9TYwjo"),
		  new Active("バインディングサークル", "Binding Circle", 28, -1, 0, "効果がかかるまでの時間", "Aisha/Aisha05_Binding Circle.png", "NIkLpCJcBTM"),
		  new Active("フレアスクリュー", "Pyro Gust", 36, 1, 0, "暗転発生が遅い(9F)", "Aisha/Aisha03_Pyro Gust.png", "P1qPek918Vg"),
		  new Active("アイスストーム", "Ice Storm", 36, 1, 0, "", "Aisha/Aisha29_Ice Storm.png", "LgUnqUXFVMw"),
		  new Active("フレアストーム", "Gust Storm", 36, 1, 0, "", "Aisha/Aisha06_Gust Storm.png", "ZqcKBnRxa70"),
	  ]),

	  new Job("ハイマジシャン/エレメンタルマスター", "em", "Aisha/ElementalMaster.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Aisha/icon", "url"),
			new Active("サイクロン", "Cyclone", 37, 0, 0, "", "Aisha/Aisha13_Cyclone.png", "EwE20ykThAM"),
			new Active("マジックミサイル", "Magic Missile", 37, 1, 0, "暗転発生が遅い(10F)", "Aisha/Aisha09_Magic Missile.png", "APCVff-EzcA"),
			new Active("チェーンライトニング", "Chain Lightning", 35, 1, 0, "", "Aisha/Aisha30_Chain Lightning.png", "jgjTd_fdJHs"),
			new Active("ブレイズステップ", "Blaze Step", 60, 1, 0, "", "Aisha/Aisha12_Blaze Step.png", "mxoNISvfug0"),
			new Active("ブリザードシャワー", "Blizzard Shower", 59, 1, 0, "", "Aisha/Aisha10_Blizzard Shower.png", "wa-u4XBZJSo"),
			new Active("チェインバースト", "Chain Burst", 60, 1, 0, "", "Aisha/Aisha08_Chain Burst.png", "nCZjO4-7_9M"),
			new Active("ウォーターキャノン", "Water Cannon", 61, 1, 0, "", "Aisha/Aisha31_Water Cannon.png", "FCGUR4F1ztk"),
			new Active("メテオシャワー", "Meteor Shower", 59, 1, 0, "", "Aisha/Aisha14_Meteor Shower.png", "JKud5UNH7lo"),
			new Active("ライトニングシャワー", "Lightning Shower", 59, 1, 0, "", "Aisha/Aisha32_Lightning Shower.png", "OEryv5HrmGE"),
			new Active("エレメンタルストーム", "Elemental Storm", 89, 1, 0, "", "Aisha/AishaHA01_Elemental Storm.png", "cLfsXFCwPBo"),
	  ]),

	  new Job("ダークマジシャン/ヴォイドプリンセス", "vp", "Aisha/VoidPrincess.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Aisha/icon", "url"),
			new Active("ダーククラウド", "Poisonous Cloud", 61, 1, 0, "", "Aisha/Aisha16_Poisonous Cloud.png", "5z2Q6bQocYQ"),
			new Active("デスフィールド", "Death Field", 60, 2, 0, "", "Aisha/Aisha17_Death Field.png", "alv-7uVvREk"),
			new Active("ヘルストーン", "Hell Stone", 36, 1, 0, "", "Aisha/Aisha15_Hell Stone.png", "FaOEHbxvG7k"),
			new Active("ヘルドロップ", "Hell Drop", 60, 0, 0, "", "Aisha/Aisha20_Hell Drop.png", "enhSu9zKai8"),
			new Active("エイジング", "Aging", 114, 1, 8, "", "Aisha/Aisha18_Aging.png", "weIy1olQFOQ"),
			new Active("プラズマカッター", "Plasma Cutter", 37, 1, 0, "暗転発生が遅い(19F)", "Aisha/Aisha19_Plasma Cutter.png", "WE_6-F1zoQY"),
			new Active("ファントムブリージング－ダークフォール", "Phantom Breathing - Dark Fall", 61, 2, 0, "", "Aisha/Aisha21_Phantom Breathing.png", "HAMPEAbK9k4"),
			new Active("ファントムブリージング－ダークホール", "Phantom Breathing - Dark Hole", 61, 2, 0, "", "Aisha/Aisha21a_Phantom Breathing.png", "osH6n1nDCOE"),
			new Active("アビスアンゴル", "Abyss Angkor", 132, 0, 0, "吸引開始まで", "Aisha/AishaHA02_Abyss Angkor.png", "IIAanrKtI8Q"),
	  ]),

	  new Job("バトルマジシャン/ディメンションウィッチ", "dw", "Aisha/DimensionWitch.png", [
//    new Active("name", "id", frame, hit, adframe, "tips", "Aisha/icon", "url"),
			new Active("ギルティプレス", "Guillotine Press", 59, 1, 0, "", "Aisha/Aisha24_Guillotine Press.png", "u1AbUZ-A_e4"),
			new Active("マジカルメイクアップ", "Magical Makeup", 179, -1, 7, "", "Aisha/Aisha25_Magical Makeup.png", "K-9owFI4JHw"),
			new Active("スーパーノヴァ", "Super Nova", 119, 1, 0, "", "Aisha/Aisha26_Super Nova.png", "qsNAVXt8bfQ"),
			new Active("エナジースポット", "Energy Spurt", 69, 2, 0, "", "Aisha/Aisha23_Energy Spurt.png", "KcpZOefU-mM"),
			new Active("ヘビープレス", "Heavy Press", 38, 1, 0, "", "Aisha/Aisha22_Heavy Press.png", "dwZBD77mmGg"),
			new Active("インパクトハンマー", "Impact Hammer", 87, 2, 0, "", "Aisha/Aisha27_Impact Hammer.png", "T7vfwFqiFwA"),
			new Active("スクリュードライバー―トルネード", "Screw Driver – Tornado", 119, 2, 9, "", "Aisha/Aisha28_Screw Driver.png", "dMTyV6I-UnM"),
			new Active("スクリュードライバー―ドリラー", "Screw Driver – Driller", 119, 2, 25, "", "Aisha/Aisha28a_Screw Driver.png", "IvJU333saMk"),
			new Active("フェイトスペース", "Fate Space", 60, 1, 0, "", "Aisha/AishaHA03_Fate Space.png", "w5MLlXdKX2g"),
	  ]),
	  
	];
};

Aisha.prototype = new Chara;

var targetChara = new Aisha();