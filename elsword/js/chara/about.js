/* Note:Activeのデータ型は(名前,フレーム,時間中HIT(-1~2),有利F,補足) */
/** アバウトに掲載されているデータ */
var About = function () {
	this.jobs = [
	  new Job("エルス", "sample", "Els/Els.png", [
	    new Active("覚醒", "Awaking", 78, -1, 19, "", "00_awaking.png", "HKFSOAyyNuM"),
	    new Active("フレイムガイザー", "Flame Geyser", 41, 1, 0, "", "Els/Els04_Flame Geyser.png", "4pJIh7C-63o"),
	    new Active("フェータルフューリー", "Fatal Fury", 37, 1, 0, "", "Els/Els03_Fatal Fury.png", "awiQ-odE2HE"),
	  ]),

	  new Job("更新履歴", "news", "n_sunny.png", [
	    new Active("ステイシスフィールド", "Statis Field", 0, -1, 0, "募集中！", "Add/Add10_Statis Field.png"),
	    new Active("ダストアナトミー", "Dust Anatomy", 0, -1, 0, "募集中！", "Add/Add15_Dust Anatomy.png"),
	    new Active("クイックシルバーアクセル", "Quicksilver Accel", 44, 2, 0, "追加コマンド無し", "Add/Add13_Quicksilver Accel.png", "m2WdSIf0tCY"),
	    new Active("エドのデータ", "Add", 0, -1, 0, "14件更新", "Add/Add.png"),
	    new Active("アラのデータ", "Ara", 0, -1, 0, "更新完了", "Ara/Ara.png"),
	    new Active("アイシャのデータ", "Aisha", 0, -1, 0, "更新完了", "Aisha/Aisha.png"),
	    new Active("レナのデータ", "Rena", 0, -1, 0, "更新完了", "Rena/Rena.png"),
	    new Active("イヴのデータ", "Eve", 0, -1, 0, "更新完了", "Eve/Eve.png"),
	    new Active("レイヴンのデータ", "Raven", 0, -1, 0, "更新完了", "Raven/Raven.png"),
	    new Active("エルスのデータ", "Els", 0, -1, 0, "更新完了", "Els/Els.png"),
	    new Active("ラシェのデータ", "Lacher", 0, -1, 0, "更新完了", "Lacher/Lacher.png"),
	  ]),
	  
	];
};

About.prototype = new Chara;

var targetChara = new About();