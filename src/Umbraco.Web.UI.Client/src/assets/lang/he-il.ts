/**
 * Creator Name: The Umbraco community
 * Creator Link: https://docs.umbraco.com/umbraco-cms/extending/language-files
 *
 * Language Alias: he
 * Language Int Name: Hebrew (Israel)
 * Language Local Name: Hebrew
 * Language LCID:
 * Language Culture: he-IL
 */
import type { UmbLocalizationDictionary } from '@umbraco-cms/backoffice/localization-api';
export default {
	actions: {
		assigndomain: 'נהל שמות מתחם',
		auditTrail: 'מעקב ביקורות',
		browse: 'צפה בתוכן',
		copy: 'העתק',
		create: 'צור',
		createPackage: 'צור חבילה',
		delete: 'מחק',
		disable: 'נטרל',
		emptyrecyclebin: 'רוקן סל מיחזור',
		exportDocumentType: 'ייצא סוג קובץ',
		importdocumenttype: 'ייבא סוג מסמך',
		importPackage: 'ייבא חבילה',
		liveEdit: 'ערוך במצב "קנבס"',
		logout: 'יציאה',
		move: 'הזז',
		notify: 'התראות',
		protect: 'גישה ציבורית',
		publish: 'פרסם',
		refreshNode: 'רענן פריטי תוכן',
		republish: 'פרסם את כל האתר מחדש',
		rights: 'הרשאות',
		rollback: 'חזור לאחור',
		sendtopublish: 'שלח לפירסום',
		sendToTranslate: 'שלח לתירגום',
		sort: 'מיין',
		translate: 'תרגם',
		update: 'עדכן',
	},
	assignDomain: {
		addNew: 'הוסף דומיין חדש',
		domain: 'דומיין',
		domainCreated: 'הדומיין החדש %0% נוסף בהצלחה',
		domainDeleted: 'הדומיין %0% נמחק',
		domainExists: 'הדומיין %0% כבר מוקצה',
		domainUpdated: 'הדומיין %0% עודכן בהצלחה',
		orEdit: 'ערוך דומיין נוכחי',
	},
	auditTrails: {
		atViewingFor: 'צופה עבור',
	},
	buttons: {
		bold: 'מודגש',
		deindent: 'בטל מרחק שוליים מהפסקה',
		formFieldInsert: 'הוסף מתוך שדה',
		graphicHeadline: 'הוספת קו גרפי',
		htmlEdit: 'ערוך -Html',
		indent: 'מרחק שוליים מהפסקה',
		italic: 'נטוי',
		justifyCenter: 'ממורכז',
		justifyLeft: 'מוצמד לשמאל',
		justifyRight: 'מוצמד לימין',
		linkInsert: 'הוספת לינק',
		linkLocal: 'הוספת לינק מקומי (עוגן)',
		listBullet: 'רשימת תבליטים',
		listNumeric: 'רשימה ממוספרת',
		macroInsert: 'הוספת מקרו',
		pictureInsert: 'הוספת תמונה',
		relations: 'ערוך הקשר',
		save: 'שמור',
		saveAndPublish: 'שמור ופרסם',
		saveToPublish: 'שמור ושלח לאישור',
		saveAndPreview: 'תצוגה מקדימה',
		styleChoose: 'בחר עיצוב',
		styleShow: 'הצג עיצוב',
		tableInsert: 'הוספת טבלה',
	},
	content: {
		about: 'אודות עמוד זה',
		alias: 'קישור חלופי',
		alternativeTextHelp: '(תיאור התמונה בקצרה)',
		alternativeUrls: 'קישור חלופי',
		clickToEdit: 'לחץ לעריכת פריט זה',
		createBy: 'נוצר על ידי',
		createDate: 'נוצר בתאריך',
		documentType: 'סוג מסמך',
		editing: 'עריכה',
		expireDate: 'הוסר ב',
		itemChanged: 'פריט זה שונה לאחר פירסומו',
		itemNotPublished: 'פריט זה לא פורסם',
		lastPublished: 'פורסם לאחרונה',
		mediatype: 'סוג מדיה',
		membergroup: 'קבוצת חברים',
		memberrole: 'תפקיד',
		membertype: 'סוג חבר',
		noDate: 'לא נבחר מידע',
		nodeName: 'כותרת עמוד',
		otherElements: 'הגדרות',
		parentNotPublished: "מסמך זה פורסם אך לא זמין לצפיה, עקב כך שמסמך האב '%0%' ממתין לפירסום",
		publish: 'פרסם',
		publishStatus: 'סטטוס פירסום',
		releaseDate: 'פורסם ב',
		removeDate: 'נקה מידע',
		sortDone: 'סידור ממוין עודכן',
		sortHelp:
			'כדי למיין את המסמכים, פשוט יש לגרור את המסמכים או ללחוץ על אחד מכותרות העמודות. ניתן לבחור מספר מסמכים בו זמנית על ידי לחיצת "Shift" או "Ctrl" בזמן הבחירה.',
		statistics: 'סטטיסטיקות',
		titleOptional: 'כותרת (לא חובה)',
		type: 'סוג',
		unpublish: 'ממתין לפירסום',
		updateDate: 'נערך לאחרונה',
		uploadClear: 'הסר קובץ',
		urls: 'קשר למסמך',
	},
	create: {
		chooseNode: 'היכן ברצונך ליצור את %0%',
		createUnder: 'צור ב',
		updateData: 'בחר סוג וכותרת',
	},
	dashboard: {
		browser: 'סייר באתר',
		dontShowAgain: '- הסתר מידע לצמיתות',
		nothinghappens: 'במידה ואומברקו לא פתוח, יש צורך לאשר חלונות קופצים מאתר זה.',
		openinnew: 'נפתח בחלון חדש',
		restart: 'הפעל מחדש',
		visit: 'בקר',
		welcome: 'ברוכים הבאים',
	},
	prompt: {
		stay: 'Stay',
		discardChanges: 'Discard changes',
		unsavedChanges: 'You have unsaved changes',
		unsavedChangesWarning: 'Are you sure you want to navigate away from this page? - you have unsaved changes',
	},
	bulk: {
		done: 'Done',
		deletedItem: 'Deleted %0% item',
		deletedItems: 'Deleted %0% items',
		deletedItemOfItem: 'Deleted %0% out of %1% item',
		deletedItemOfItems: 'Deleted %0% out of %1% items',
		publishedItem: 'Published %0% item',
		publishedItems: 'Published %0% items',
		publishedItemOfItem: 'Published %0% out of %1% item',
		publishedItemOfItems: 'Published %0% out of %1% items',
		unpublishedItem: 'Unpublished %0% item',
		unpublishedItems: 'Unpublished %0% items',
		unpublishedItemOfItem: 'Unpublished %0% out of %1% item',
		unpublishedItemOfItems: 'Unpublished %0% out of %1% items',
		movedItem: 'Moved %0% item',
		movedItems: 'Moved %0% items',
		movedItemOfItem: 'Moved %0% out of %1% item',
		movedItemOfItems: 'Moved %0% out of %1% items',
		copiedItem: 'Copied %0% item',
		copiedItems: 'Copied %0% items',
		copiedItemOfItem: 'Copied %0% out of %1% item',
		copiedItemOfItems: 'Copied %0% out of %1% items',
	},
	defaultdialogs: {
		anchorInsert: 'שם',
		assignDomain: 'ניהול שם מתחם',
		closeThisWindow: 'סגור חלון זה',
		confirmdelete: 'האם הינך בטוח שברצונך למחוק זאת?',
		confirmdisable: 'האם הינך בטוח שברצונך לכבות זאת?',
		confirmlogout: 'האם הינך בטוח?',
		confirmSure: 'האם אתה בטוח?',
		cut: 'גזור',
		editdictionary: 'ערוך פרט מילון',
		editlanguage: 'ערוך שפה',
		insertAnchor: 'הוסף קישור מקומי',
		insertCharacter: 'הוסף תו',
		insertgraphicheadline: 'הוסף פס גרפי',
		insertimage: 'הוסף תמונה',
		insertlink: 'הוסף קישור',
		insertMacro: 'לחץ להוספת מאקרו חדש',
		inserttable: 'הוסף טבלה',
		lastEdited: 'נערך לאחרונה',
		link: 'קישור',
		linkinternal: 'קישור פנימי:',
		linklocaltip: 'בעת שימוש בקישוריים פנימיים, הוסף "#" בתחילת הקישור',
		linknewwindow: 'לפתוח בחלון חדש?',
		macroDoesNotHaveProperties: 'המאקרו לא מכיל מאפיינים שניתן לערוך',
		paste: 'הדבק',
		permissionsEdit: 'ערוך הרשאות עבור',
		recycleBinDeleting: 'הפריטים הנמצאים בסל המיחזור נמחקים כעת, השאר חלון זה פתוח עד לגמר פעולת המחיקה.',
		recycleBinIsEmpty: 'סל המיחזור ריק כעת',
		recycleBinWarning: 'מחיקת פריטים מסל המיחזור תמחוק את הפריטים לצמיתות',
		regexSearchError:
			"<a target='_blank' rel='noopener' href='http://regexlib.com'>regexlib.com</a>'s webservice is currently experiencing some problems, which we have no control over. We are very sorry for this inconvenience.",
		regexSearchHelp: "חיפוש ביטויים להוספת אימות עבור שדות טופס. לדוגמא: 'כתובת אימייל', 'מיקוד', 'כתובת אתר' ועוד",
		removeMacro: 'הסר מאקרו',
		requiredField: 'שדה חובה',
		sitereindexed: 'האתר אונדקס מחדש',
		siterepublished:
			'זיכרון המטמון של האתר רוענן בהצלחה. כל התוכן המפורסם כעת מעודכן, שאר התוכן המיועד לפירסום ימתין לפירסום',
		siterepublishHelp:
			'זיכרון המטמון של האתר ירוענן. כל התוכן שפורסם ירוענן בהתאם, שאר התוכן המיועד לפירסום ימתין לפירסום',
		tableColumns: 'מספר עמודות',
		tableRows: 'מספר שורות',
		thumbnailimageclickfororiginal: 'לחץ על התמונה לגודל מלא',
		treepicker: 'בחר פריט',
		viewCacheItem: 'צפה בפרטי זיכרון מטמון',
	},
	dictionaryItem: {
		description:
			'\n      ערוך את גרסאות השפות השונות לפריט המילון \'<em>%0%</em>\' למטה<br/>ניתן להוסיף שפות נוספות תחת "שפות" בתפריט בצד שמאל\n   ',
		displayName: 'שם התצוגה לשפה',
	},
	editdatatype: {
		addPrevalue: 'הוסף ערך מקדים',
		dataBaseDatatype: 'סוג מידע עבור בסיס נתונים',
		guid: 'Data Editor GUID',
		renderControl: 'הפוך שליטה',
		rteButtons: 'כפתורים',
		rteEnableAdvancedSettings: 'הפעל הגדרות מתקדמות עבור',
		rteEnableContextMenu: 'הפעל תפריט מקושר',
		rteMaximumDefaultImgSize: 'גודל תמונה מקסימלי כברירת מחדל עבור תמונות המתווספות',
		rteRelatedStylesheets: 'סגנונות עיצוב קרובים',
		rteShowLabel: 'הצג תוויות',
		rteWidthAndHeight: 'רוחב ואורך',
	},
	errorHandling: {
		errorButDataWasSaved: 'המידע שלך נשמר, אך לפני שניתן יהיה לפרסם אותו יש צורך לתקן את השגיאות הבאות:',
		errorChangingProviderPassword:
			'ספק החברות הנוכחית לא תומך בשינוי סיסמה (EnablePasswordRetrieval צריך להיות מוגדר על true)',
		errorExistsWithoutTab: 'השדה %0% כבר קיים',
		errorHeader: 'התרחשו שגיאות:',
		errorHeaderWithoutTab: 'התרחשו שגיאות:',
		errorInPasswordFormat:
			'הסיסמה חייבת להיות במינימום של %0% תווים characters long and contain at least %1% non-alpha numeric character(s)',
		errorIntegerWithoutTab: '%0% חייב להיות מספר שלם',
		errorMandatory: 'השדה %0% בלשונית %1% הינו זה חובה',
		errorMandatoryWithoutTab: 'השדה %0% הינו זה חובה',
		errorRegExp: '%0% ב- %1% אינו הפורמט התקין',
		errorRegExpWithoutTab: '%0% אינו פורמט תקין',
	},
	errors: {
		codemirroriewarning:
			'שים לב! למרות ש- CodeMirror מופעל מההגדרות, הוא נמצא במצב כבוי באינטרנט אקספלורר מפאת חוסר יציבות.',
		contentTypeAliasAndNameNotNull: 'אנא הזן את  את הכינוי והשם עבור סוג המידע!',
		filePermissionsError: 'קיימת בעיית הרשאות גישה בקריאה/כתיבה עבור הקובץ או התיקיה הזו',
		missingTitle: 'אנא בחר כותרת',
		missingType: 'אנא בחר סוג',
		pictureResizeBiggerThanOrg: 'הינך עומד לשנות את התמונה לגודל גדול יותר מהמקור, האם ברצונך להמשיך',
		startNodeDoesNotExists: 'הפריט תוכן ההתחלתי נמחק, צור קשר עם מנהל האתר.',
		stylesMustMarkBeforeSelect: 'תחילה יש לסמן תוכן לפני שינוי עיצוב',
		stylesNoStylesOnPage: 'סגנונות עיצוב פעילים לא זמינים',
		tableColMergeLeft: 'יש למקם את הסמן משמאל לשני התאים אותם תרצה למזג',
		tableSplitNotSplittable: 'אין אפשרות לפצל תא שלא מוזג לפני כן.',
	},
	general: {
		about: 'אודות',
		action: 'פעולה',
		add: 'הוסף',
		alias: 'כינוי',
		areyousure: 'האם אתה בטוח?',
		border: 'גבול',
		by: 'או',
		cancel: 'בטל',
		cellMargin: 'שוליים לתא',
		choose: 'בחר',
		close: 'סגור',
		closewindow: 'סגור חלון',
		comment: 'הערה',
		confirm: 'אישור',
		constrainProportions: 'שמור על פרופורציות',
		continue: 'המשך',
		copy: 'העתק',
		create: 'צור',
		database: 'בסיס נתונים',
		date: 'תאריך',
		default: 'ברירת מחדל',
		delete: 'מחק',
		deleted: 'נמחק',
		deleting: 'מחיקה...',
		design: 'עיצוב',
		dimensions: 'מימדים',
		down: 'למטה',
		download: 'הורדה',
		edit: 'עריכה',
		edited: 'נערך',
		elements: 'אלמנטים',
		email: 'כתובת אימייל',
		error: 'שגיאה',
		findDocument: 'חפש',
		height: 'אורך',
		help: 'עזרה',
		icon: 'אייקון',
		import: 'ייבא',
		innerMargin: 'שוליים פנימיים',
		insert: 'הוסף',
		install: 'התקנה',
		justify: 'ליישר',
		language: 'שפה',
		layout: 'תכנית',
		loading: 'טוען',
		locked: 'נעול',
		login: 'התחבר',
		logoff: 'התנתק',
		logout: 'התנתק',
		macro: 'מקרו',
		move: 'הזז',
		name: 'שם',
		new: 'חדש',
		next: 'הבא',
		no: 'לא',
		of: 'של',
		ok: 'אישור',
		open: 'פתח',
		or: 'או',
		password: 'סיסמה',
		path: 'נתיב',
		pleasewait: 'אנא המתן בבקשה...',
		previous: 'הקודם',
		properties: 'הגדרות',
		reciept: 'כתובת אימייל לקבלת טופס',
		recycleBin: 'סל מיחזור',
		remaining: 'נשאר',
		rename: 'שנה שם',
		renew: 'חידוש',
		retry: 'נסה שנית',
		rights: 'הרשאות',
		search: 'חיפוש',
		server: 'שרת',
		show: 'הצג',
		showPageOnSend: 'הצג עמוד בשליחה',
		size: 'גודל',
		sort: 'סדר',
		submit: 'Submit',
		type: 'סוג',
		typeToSearch: 'הקלד לחיפוש...',
		up: 'למעלה',
		update: 'עדכן',
		upgrade: 'שדרג',
		upload: 'העלאה',
		url: 'כתובת URL ',
		user: 'משתמש',
		username: 'שם משתמש',
		value: 'ערך',
		view: 'צפיה',
		welcome: 'ברוכים הבאים...',
		width: 'רוחב',
		yes: 'כן',
		reorder: 'Reorder',
		reorderDone: 'I am done reordering',
	},
	graphicheadline: {
		backgroundcolor: 'צבע רקע',
		bold: 'מובלט',
		color: 'צבע טקסט',
		font: 'פונט',
		text: 'טקסט',
	},
	headers: {
		page: 'עמוד',
	},
	installer: {
		databaseErrorCannotConnect: 'ההתקנה לא מצליחה להתחבר לבסיס הנתונים.',
		databaseFound: 'בסיס הנתונים שלך נמצא והוא מזוהה כ',
		databaseHeader: 'הגדרת בסיס נתונים',
		databaseInstall: '\n      Press the <strong>install</strong> button to install the Umbraco %0% database\n    ',
		databaseInstallDone: 'Umbraco %0% has now been copied to your database. Press <strong>Next</strong> to proceed.',
		databaseText:
			'To complete this step, you must know some information regarding your database server ("connection string").<br />\n        Please contact your ISP if necessary.\n        If you\'re installing on a local machine or server you might need information from your system administrator.',
		databaseUpgrade:
			"\n      <p>\n      Press the <strong>upgrade</strong> button to upgrade your database to Umbraco %0%</p>\n      <p>\n      Don't worry - no content will be deleted and everything will continue working afterwards!\n      </p>\n      ",
		databaseUpgradeDone:
			'Your database has been upgraded to the final version %0%.<br />Press <strong>Next</strong> to\n      proceed. ',
		databaseUpToDate:
			'Your current database is up-to-date!. Click <strong>next</strong> to continue the configuration wizard',
		defaultUserChangePass: '<strong>The Default users’ password needs to be changed!</strong>',
		defaultUserDisabled:
			'<strong>The Default user has been disabled or has no access to Umbraco!</strong></p><p>No further actions needs to be taken. Click <strong>Next</strong> to proceed.',
		defaultUserPassChanged:
			"<strong>The Default user's password has been successfully changed since the installation!</strong></p><p>No further actions needs to be taken. Click <strong>Next</strong> to proceed.",
		defaultUserPasswordChanged: 'הסיסמה שונתה!',
		greatStart: 'התחל מכאן, צפה בסרטוני ההדרכה עבור אומברקו',
		None: 'לא הותקן עדיין.',
		permissionsAffectedFolders: 'קבצים ותיקיות המושפעים',
		permissionsAffectedFoldersMoreInfo: 'מידע נוסף אודות התקנה ורשאות עבור אומרקו ניתן לקרוא כאן',
		permissionsAffectedFoldersText: 'על מנת לבצע זאת, יש צורך לאפשר הרשאות ל ASP.NET לערוך את הקצבים או התיקיות הבאות',
		permissionsAlmostPerfect:
			'<strong>Your permission settings are almost perfect!</strong><br /><br />\n        You can run Umbraco without problems, but you will not be able to install packages which are recommended to take full advantage of Umbraco.',
		permissionsHowtoResolve: 'איך לפתור',
		permissionsHowtoResolveLink: 'לחץ כאן לקרוא את גירסת הטקסט',
		permissionsHowtoResolveText:
			'Watch our <strong>video tutorial</strong> on setting up folder permissions for Umbraco or read the text version.',
		permissionsMaybeAnIssue:
			'<strong>Your permission settings might be an issue!</strong>\n      <br/><br />\n      You can run Umbraco without problems, but you will not be able to create folders or install packages which are recommended to take full advantage of Umbraco.',
		permissionsNotReady:
			"<strong>Your permission settings are not ready for Umbraco!</strong>\n          <br /><br />\n          In order to run Umbraco, you'll need to update your permission settings.",
		permissionsPerfect:
			'<strong>Your permission settings are perfect!</strong><br /><br />\n              You are ready to run Umbraco and install packages!',
		permissionsResolveFolderIssues: 'פתירת בעיות בתיקיה',
		permissionsResolveFolderIssuesLink: 'עקוב אחר הלינק המצורף על מנת לפתור בעיות עם ASP.NET ויצירת תיקיות חדשות.',
		permissionsSettingUpPermissions: 'הגדרת הרשאות לתיקיה',
		permissionsText:
			"\n\t  אומברקו צריכה אישור כתיבה/עריכה עבור מספר ספריות על מנת למיין קבצים כמו תמונות וקבצי PDF's.\n      בנוסף ישמר מידע זמני (cache) על מנת לשפר את הביצועים של האתר.\n    ",
		runwayFromScratch: 'אני רוצה להתחיל מאתר ריק',
		runwayFromScratchText:
			'\n        Your website is completely empty at the moment, so that’s perfect if you want to start from scratch and create your own document types and templates.\n        (<a href="https://umbraco.tv/documentation/videos/for-site-builders/foundation/document-types">learn how</a>)\n        You can still choose to install Runway later on. Please go to the Developer section and choose Packages.\n      ',
		runwayHeader: 'סיימת להתקין את מערכת אומברקו, מה ברצונך לעשות כעת?',
		runwayInstalled: 'Runway הותקן',
		runwayInstalledText:
			'\n      You have the foundation in place. Select what modules you wish to install on top of it.<br />\n      This is our list of recommended modules, check off the ones you would like to install, or view the <a href="#" onclick="toggleModules(); return false;" id="toggleModuleList">full list of modules</a>\n      ',
		runwayOnlyProUsers: 'המלצות עבור משתמשים מנוסים',
		runwaySimpleSite: 'ברצוני להתחיל עם אתר פשוט',
		runwaySimpleSiteText:
			'\n      <p>\n      "Runway" is a simple website providing some basic document types and templates. The installer can set up Runway for you automatically,\n        but you can easily edit, extend or remove it. It’s not necessary and you can perfectly use Umbraco without it. However,\n        Runway offers an easy foundation based on best practices to get you started faster than ever.\n        If you choose to install Runway, you can optionally select basic building blocks called Runway Modules to enhance your Runway pages.\n        </p>\n        <small>\n        <em>Included with Runway:</em> Home page, Getting Started page, Installing Modules page.<br />\n        <em>Optional Modules:</em> Top Navigation, Sitemap, Contact, Gallery.\n        </small>\n      ',
		runwayWhatIsRunway: 'מה זה Runway',
		step1: 'צעד 1/5 אישור רשיון',
		step2: 'צעד 2/5: הגדרת בסיס נתונים',
		step3: 'צעד 3/5: אימות קובץ ההרשאות',
		step4: 'צעד 4/5: בדיקת האבטחה של אומברקו',
		step5: 'צעד 5/5: אומברקו מוכנה להתחיל',
		thankYou: 'תודה שבחרת באומברקו',
		theEndBrowseSite: '<h3>Browse your new site</h3>\nYou installed Runway, so why not see how your new website looks.',
		theEndFurtherHelp:
			'<h3>Further help and information</h3>\nGet help from our award winning community, browse the documentation or watch some free videos on how to build a simple site, how to use packages and a quick guide to the Umbraco terminology',
		theEndHeader: 'אומברקו %0% מותקנת ומוכנה לשימוש',
		theEndInstallSuccess:
			'You can get <strong>started instantly</strong> by clicking the "Launch Umbraco" button below. <br />If you are <strong>new to Umbraco</strong>,\nyou can find plenty of resources on our getting started pages.',
		theEndOpenUmbraco:
			'<h3>Launch Umbraco</h3>\nTo manage your website, simply open the Umbraco backoffice and start adding content, updating the templates and stylesheets or add new functionality',
		Unavailable: 'ההתחברות לבסיס הנתונים נכשלה.',
		Version3: 'Umbraco גירסה 3',
		Version4: 'Umbraco גירסה 4',
		watch: 'צפה',
		welcomeIntro:
			'This wizard will guide you through the process of configuring <strong>Umbraco %0%</strong> for a fresh install or upgrading from version 3.0.\n                                <br /><br />\n                                Press <strong>"next"</strong> to start the wizard.',
	},
	language: {
		cultureCode: 'קוד שפה',
		displayName: 'שם השפה',
	},
	lockout: {
		lockoutWillOccur: 'לא זוהתה פעילות כלשהי ותבוצע התנתקות אוטומטית בעוד',
		renewSession: 'יש לבצע חידוש פעילות על מנת לשמור על התוכן',
	},
	login: {
		greeting0: 'ברוכים הבאים',
		greeting1: 'ברוכים הבאים',
		greeting2: 'ברוכים הבאים',
		greeting3: 'ברוכים הבאים',
		greeting4: 'ברוכים הבאים',
		greeting5: 'ברוכים הבאים',
		greeting6: 'ברוכים הבאים',
		bottomText:
			'<p style="text-align:right;">&copy; 2001 - %0% <br /><a href="https://umbraco.com" style="text-decoration: none" target="_blank" rel="noopener">umbraco.com</a></p> ',
	},
	main: {
		dashboard: 'לוח הבקרה',
		sections: 'איזורים',
		tree: 'תוכן',
	},
	moveOrCopy: {
		choose: 'בחר עמוד מלמעלה...',
		copyDone: '%0% הועתק אל %1%',
		copyTo: 'בחר לאן המסמך %0% יועתק',
		moveDone: '%0% הועבר אל %1%',
		moveTo: 'בחר להיכן המסמך %0% יועבר',
		nodeSelected: "has been selected as the root of your new content, click 'ok' below.",
		noNodeSelected: "No node selected yet, please select a node in the list above before clicking 'ok'",
		notAllowedByContentType: 'The current node is not allowed under the chosen node because of its type',
		notAllowedByPath: 'The current node cannot be moved to one of its subpages',
		notValid:
			"TRANSLATE ME: 'The action isn't allowed since you have insufficient permissions on 1 or more child documents.'",
	},
	notifications: {
		editNotifications: 'ערוך את ההתראות עבור %0%',
		mailBody:
			'\n      שלום, %0%\n\n      זוהי הודעה אוטומטית המיידעת אותך שהמשימה %1%\n\t  בוצעה בעמוד %2% על ידי המשתמש %3%\n\n      לעריכה, יש ללחוץ על הלינק הבא://%4%/actions/editContent.aspx?id=%5% .\n\n      המשך יום נעים!\n    ',
		mailBodyHtml:
			'<p>Hi %0%</p>\n\n\t\t  <p>This is an automated mail to inform you that the task <strong>\'%1%\'</strong>\n\t\t  has been performed on the page <a href="http://%4%/actions/preview.aspx?id=%5%"><strong>\'%2%\'</strong></a>\n\t\t  by the user <strong>\'%3%\'</strong>\n\t  </p>\n\t\t  <div style="margin: 8px 0; padding: 8px; display: block;">\n\t\t\t\t<br />\n\t\t\t\t<a style="color: white; font-weight: bold; background-color: #5372c3; text-decoration : none; margin-right: 20px; border: 8px solid #5372c3; width: 150px;" href="http://%4%/#/content/content/edit/%5%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EDIT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> &nbsp;\n\t\t\t\t<br />\n\t\t  </div>\n\t\t  <p>\n\t\t\t  <h3>Update summary:</h3>\n\t\t\t  <table style="width: 100%;">\n\t\t\t\t\t\t   %6%\n\t\t\t\t</table>\n\t\t\t </p>\n\n\t\t  <div style="margin: 8px 0; padding: 8px; display: block;">\n\t\t\t\t<br />\n\t\t\t\t<a style="color: white; font-weight: bold; background-color: #5372c3; text-decoration : none; margin-right: 20px; border: 8px solid #5372c3; width: 150px;" href="http://%4%/#/content/content/edit/%5%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EDIT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> &nbsp;\n\t\t\t\t<br />\n\t\t  </div>\n\n\t\t  <p>Have a nice day!<br /><br />\n\t\t\t  Cheers from the Umbraco robot\n\t\t  </p>',
		mailSubject: '[%0%] התראות  %1% בוצעו ב %2%',
		notifications: 'התראות',
	},
	packager: {
		chooseLocalPackageText:
			'\n      בחר חבילה מהמחשב שלך, על ידי לחיצה על כפתור ה "browse"<br />\n         ויש לבחור את החבילה הרצויה. לחבילות Umbraco יש בד"כ יש סיומות בשם ".umb" או ".zip".\n      ',
		packageAuthor: 'יוצר החבילה',
		packageDocumentation: 'תיעוד',
		packageMetaData: 'מטה דטה עבור החבילה',
		packageName: 'שם החבילה',
		packageNoItemsHeader: 'החבילה לא מכילה אף פריט',
		packageNoItemsText:
			'החבילה אינה מכילה פריטים למחיקה.<br/><br/>\n      ניתן למחוק בבטיחות רבה את החבילה מהמערכת על ידי לחיצה על "הסר חבילה".',
		packageOptions: 'אפשרויות חבילה',
		packageReadme: 'תיאור החבילה',
		packageRepository: 'מאגר חבילות',
		packageUninstallConfirm: 'אשר הסרה',
		packageUninstalledHeader: 'החבילה הוסרה',
		packageUninstalledText: 'החבילה הוסרה בהצלחה!',
		packageUninstallHeader: 'הסר חבילה',
		packageUninstallText:
			'ניתן להוריד סימון מפריטים שאותם אינך רוצה להסיר, בזמן זה. כשילחץ כפתור "אשר הסרה" כל הפריטים המסומנים ימחקו.<br />\n      <span style="color: Red; font-weight: bold;">הערה:</span>כל מסמך, מדיה וכו\' התלוים בפריטים שהסרת יפסיקו לעבוד, ויכולים להביא למצב של אי יציבות למערכת,\n      יש למחוק קבצים עם זהירות יתרה, אם יש ספק יש לפנות ליוצר החבילה.',
		packageVersion: 'גירסת החבילה',
	},
	paste: {
		doNothing: 'שמור עיצוב בהדבקה (לא מומלץ)',
		errorMessage:
			'הטקסט שאתה עומד להדביק מכיל עיצוב או תווים מיוחדים. דבר זה יגול להגרם בעת העתקה ממסמך בוורד. אומברקו יכולה להסיר את העיצוב או תווים מיוחדים על מנת שהטקסט המועתק יתאים ל- Web.',
		removeAll: 'הסר עיצוב באופן מלא בהדבקה',
		removeSpecialFormattering: 'הדבק אך הסר רק עיצוב (מומלץ)',
	},
	publicAccess: {
		paAdvanced: 'תפקיד בסיסי בהגנה',
		paAdvancedHelp:
			'אם הינך רוצה לשלוט בגישה לעמוד על ידי זיהוי תפקיד המשתמש,<br /> על ידי שימוש בקבוצות הקיימות ב Umbraco.',
		paAdvancedNoGroups: 'יש צורך ליצור קבוצה לפני שימוש  <br />בזיהוי תפקיד המשתמש.',
		paErrorPage: 'עמוד שגיאות',
		paErrorPageHelp: 'השתמש בעת התחברות משתמשים וללא אפשרות גישה',
		paHowWould: 'בחר איך להגביל את הגישה לעמוד זה',
		paIsProtected: '%0% כעת מוגן',
		paIsRemoved: 'הגנה הוסרה עבור %0%',
		paLoginPage: 'עמוד התחברות',
		paLoginPageHelp: 'בחר את העמוד המכיל טופס התחברות',
		paRemoveProtection: 'הסר הגנה',
		paSelectPages: 'בחר את העמודים המכילים פרטי התחברות והודעות שגיאה',
		paSelectRoles: 'בחר את הכללים אשר יש להם גישה לעמוד זה',
		paSetLogin: 'הגדר שם משתמש וסיסמה עבור עמוד זה',
		paSimple: 'הגנת משתמש יחיד',
		paSimpleHelp: 'אם ברצונך להגדיר הגנה פשוטה בעזרת שימוש בשם משתמש וסיסמה',
	},
	publish: {
		contentPublishedFailedByEvent: '\n      אין אפשרות לפרסם את התוכן %0%, תוסף צד שלישי מונע זאת.\n    ',
		includeUnpublished: 'כלול עמודי ילדים שלא פורסמו',
		inProgress: 'אנא המתן - הפירסום בתהליך...',
		inProgressCounter: '%0% מתוך %1% עמודים פורסמם בהצלחה...',
		nodePublish: 'העמוד %0% פורסם.',
		nodePublishAll: 'העמוד %0% וכל תתי העמודים פורסמו',
		publishAll: 'פרסם את העמוד %0% ואת כל תתי העמודים',
		publishHelp:
			'לחץ <em>ok</em> כדי לפרסם <strong>%0%</strong> ולהפוך תוכן זה זמין לציבור הרחב<br/><br />\n      הינך יכולה לפרסם את כל תתי העמודים על ידי סימון  <em>פרסם את העמוד את כל תתי העמודים</em> למטה.\n      ',
	},
	relatedlinks: {
		addExternal: 'הוסף קישור חיצוני',
		addInternal: 'הוסף קישור פנימי',
		addlink: 'הוסף',
		caption: 'כותרת',
		internalPage: 'עמוד פנימי',
		linkurl: 'קישור',
		modeDown: 'הורד למטה',
		modeUp: 'העלה למעלה',
		newWindow: 'פתח בחלון חדש',
		removeLink: 'הסר קישור',
	},
	rollback: {
		diffHelp:
			'להלן ההבדלים בין הגירסא הנוכחית לבין הגרסא שנבחרה. <br />טקסט <del>אדום</del> לא יוצג בגרסא שנבחרה, טקסט <ins>ירוק</ins> מייצט טקסט שנוסף.',
		documentRolledBack: 'המסמך שוחזר בהצלחה',
		htmlHelp: 'להלן הגרסא שנבחרה כHTML, אם הינך לצפות בשינויים בין שתי הגרסאות בו זמנית, בחר ב diff',
		rollbackTo: 'חזור לאחור אל',
		selectVersion: 'בחר גירסה',
		view: 'תצוגה',
	},
	scripts: {
		editscript: 'ערוך קובץ סקריפט',
	},
	sections: {
		concierge: 'Concierge',
		content: 'תוכן',
		courier: 'Courier',
		developer: 'מפתח',
		installer: 'אשף הגדרת אומברקו',
		media: 'מדיה',
		member: 'חברים',
		newsletters: 'עיתון',
		settings: 'הגדרות',
		statistics: 'סטטיסטיקות',
		translation: 'תירגום',
		users: 'משתמשים',
	},
	settings: {
		defaulttemplate: 'תבנית ברירת מחדל',
		importDocumentTypeHelp:
			"על מנת לייבא סוג מסמך,מצא את הקובץ \".udt\" במחשב שלך על ידי לחיצה על 'סייר' ואז 'ייבא' (ייתכן ותצטרך לבצע אימות במסך הבא)",
		newtabname: 'כותרת לשונית חדשה',
		nodetype: 'סוג פריט תוכן',
		objecttype: 'סוג',
		stylesheet: 'גליונות סגנון',
		tab: 'לשונית',
		tabname: 'כותרת לשונית',
		tabs: 'לשוניות',
	},
	sort: {
		sortOrder: 'Sort order',
		sortCreationDate: 'Creation date',
		sortDone: 'המיון הושלם.',
		sortHelp:
			'יש לגרור את הפריטים מעלה או מטה כדי להגדיר את סדר התוכן. או לחץ על כותרת העמודה כדי למיין את כל פריטי התוכן',
		sortPleaseWait: 'פריטי התוכן ממיונים ברגע זה, תהליך זה לוקח זמן מה.',
	},
	speechBubbles: {
		contentPublishedFailedByEvent: 'הפירסום בוטל על ידי תוסף צד שלישי',
		contentTypeDublicatePropertyType: 'סוג תכונה כבר קיים',
		contentTypePropertyTypeCreated: 'סוג תכונה נשמר',
		contentTypePropertyTypeCreatedText: 'שם: %0% <br /> סוג מידע: %1%',
		contentTypePropertyTypeDeleted: 'סוג תכונה נמחק',
		contentTypeSavedHeader: 'סוג מסמך נשמר',
		contentTypeTabCreated: 'נוצרה לשונית',
		contentTypeTabDeleted: 'לשונית נמחקה',
		contentTypeTabDeletedText: 'לשונית עם מזהה: %0% נמחקה',
		cssErrorHeader: 'סגנון עיצוב לא נשמר',
		cssSavedHeader: 'סגנון עיצוב נשמר',
		cssSavedText: 'סגנון עיצוב נשמר ללא שגיאות',
		dataTypeSaved: 'סוג מידע נשמר',
		dictionaryItemSaved: 'פריט במילון נשמר',
		editContentPublishedFailedByParent: 'הפירסום נכשל, עמוד האב לא מפורסם',
		editContentPublishedHeader: 'התוכן פורסם',
		editContentPublishedText: 'ומוצג לצפיה באתר',
		editContentSavedHeader: 'תוכן נשמר',
		editContentSavedText: 'זכור לפרסם את התוכן על מנת שהשינויים יוצגו',
		editContentSendToPublish: 'נשלח לאישור',
		editContentSendToPublishText: 'השינויים נשלחו לאישור',
		editMemberSaved: 'חבר נשמר',
		editStylesheetPropertySaved: 'תגונה של סגנון עיצוב נשמרה',
		editStylesheetSaved: 'סגנון עיצוב נשמר',
		editTemplateSaved: 'תבנית נשמרה',
		editUserError: 'שגיאה בעת שמירת משתמש (בדוק Log)',
		editUserSaved: 'הגדרות משתמש נשמרו',
		fileErrorHeader: 'קובץ לא נשמר',
		fileErrorText: 'אין אפשרות לשמור את הקובץ, בדוק הרשאות',
		fileSavedHeader: 'הקובץ נשמר',
		fileSavedText: 'הקובץ נשמר ללא שגיאות',
		languageSaved: 'שפה נשמרה',
		templateErrorHeader: 'התבנית לא נשמרה',
		templateErrorText: 'שים לב שאין 2 תבניות עם אותו השם/כינוי',
		templateSavedHeader: 'התבנית נשמרה',
		templateSavedText: 'התבנית נשמרה ללא שגיאות!',
	},
	stylesheet: {
		aliasHelp: 'השתמש בסינטקס CSS לדוגמא: h1, .redHeader, .blueTex',
		editstylesheet: 'ערוך סגנון עיצוב',
		editstylesheetproperty: 'ערוך הגדרות סגנון עיצוב',
		nameHelp: 'שם לזיהוי הגדרות ה- style בעורך הטקסט העשיר',
		preview: 'תצוגה מקדימה',
		styles: 'עיצובים',
	},
	template: {
		edittemplate: 'ערוך תבנית',
		insertContentArea: 'הוסף איזור תוכן',
		insertContentAreaPlaceHolder: 'הוסף content area placeholder',
		insertDictionaryItem: 'הוסף פריט מילון',
		insertMacro: 'הוסף מקרו',
		insertPageField: 'הוסף שדה עמוד לאומברקו',
		mastertemplate: 'תבנית ראשית',
		quickGuide: 'מדריך מהיר עבור תבנית תגיות באומברקו',
		template: 'תבנית',
	},
	grid: {
		media: 'Image',
		macro: 'Macro',
		insertControl: 'Choose type of content',
		chooseLayout: 'Choose a layout',
		addRows: 'Add a row',
		addElement: 'Add content',
		dropElement: 'Drop content',
		settingsApplied: 'Settings applied',
		contentNotAllowed: 'This content is not allowed here',
		contentAllowed: 'This content is allowed here',
		clickToEmbed: 'Click to embed',
		clickToInsertImage: 'Click to insert image',
		placeholderWriteHere: 'Write here...',
		gridLayouts: 'Grid Layouts',
		gridLayoutsDetail:
			'Layouts are the overall work area for the grid editor, usually you only need one or two different layouts',
		addGridLayout: 'Add Grid Layout',
		addGridLayoutDetail: 'Adjust the layout by setting column widths and adding additional sections',
		rowConfigurations: 'Row configurations',
		rowConfigurationsDetail: 'Rows are predefined cells arranged horizontally',
		addRowConfiguration: 'Add row configuration',
		addRowConfigurationDetail: 'Adjust the row by setting cell widths and adding additional cells',
		columns: 'Columns',
		columnsDetails: 'Total combined number of columns in the grid layout',
		settings: 'Settings',
		settingsDetails: 'Configure what settings editors can change',
		styles: 'Styles',
		stylesDetails: 'Configure what styling editors can change',
		allowAllEditors: 'Allow all editors',
		allowAllRowConfigurations: 'Allow all row configurations',
	},
	templateEditor: {
		alternativeField: 'שדה אלטרנטיבי',
		alternativeText: 'טקסט חלופי',
		casing: 'מסגרת',
		chooseField: 'בחר שדה',
		convertLineBreaks: 'המרת מעברי שורה',
		convertLineBreaksHelp: 'החלף מעברי שורה עם תגית ה HTML &lt;br&gt;',
		dateOnly: 'כן, תאריך בלבד',
		formatAsDate: 'פורמט תאריך',
		htmlEncode: 'קידוד HTML',
		htmlEncodeHelp: 'תווים מיוחדים יוחלפו בתווי HTML מתאימים.',
		insertedAfter: 'יוכנס אחרי ערך השדה',
		insertedBefore: 'יוכנס לפני ערך השדה',
		lowercase: 'אותיות קטנות',
		none: 'ללא',
		postContent: 'הוסף אחרי השדה',
		preContent: 'הוסף לפני השדה',
		recursive: 'רקורסיבי',
		removeParagraph: 'הסר תגי פסקה',
		removeParagraphHelp: 'מסיר את כל ה- &lt;P&gt; בתחילת ובסוף הטקסט',
		uppercase: 'אותיות גדולות',
		urlEncode: 'קידוד URL',
		urlEncodeHelp: 'תווים מיוחדים יעוצבו ב- URL',
		usedIfAllEmpty: 'יבוצע שימוש אך ורק עם ערך השדה יהיה ריק',
		usedIfEmpty: 'בשדה זה יבוצע שימוש אך ורק אם השדה העיקרי יהיה ריק',
		withTime: 'כן, עם שעה. תו מפריד: ',
	},
	translation: {
		details: 'פרטי תירגום',
		DownloadXmlDTD: 'הורד xml DTD',
		fields: 'שדות',
		includeSubpages: 'כלול דפי משנה',
		mailBody:
			"\n      שלום %0%\n\n\t  זוהי הודעה אוטומטית הבאה ליידע אותך בנוגע למסמך '%1%'\n      שהוגשה בקשה לתירגום על '%5%' על ידי %2%.\n\n      לעריכה, לחץ על הלינק הבא: http://%3%/translation/details.aspx?id=%4% .\n\n      באפשרותך גם להיכנס למערכת על מנת לראות את כל משימות התירגום\n      http://%3%\n\n      המשך יום נעים.\n\n    ",
		noTranslators: 'לא נמצאו משתמשמים המוגדרים כמתרגמים. יש ליצור משתמש המוגדר כמתרגם לפני שליחת תוכן לתירגום',
		pageHasBeenSendToTranslation: "העמוד '%0%' נשלח לתירגום",
		sendToTranslate: "שלח את העמוד '%0%' לתירגום",
		totalWords: 'סך הכל מילים',
		translateTo: 'תרגם עבור',
		translationDone: 'התירגום הושלם.',
		translationDoneHelp:
			'ניתן לראות תצוגה מקדימה של העמודים שכבר תורגמו על ידי לחיצה על הלינק למטה. If the original page is found, you will get a comparison of the 2 pages.',
		translationFailed: 'התירגום נכשל, קובץ ה- xml עלול להיות מקולקל',
		translationOptions: 'אפשרויות תירגום',
		translator: 'מתרגם',
		uploadTranslationXml: 'העלה קובץ תירגום ב xml',
	},
	treeHeaders: {
		cacheBrowser: 'זיכרון מטמון בדפדפן',
		contentRecycleBin: 'סל מיחזור',
		createdPackages: 'יצירת חבילות',
		dataTypes: 'סוגי מידע',
		dictionary: 'מילון',
		installedPackages: 'חבילות מותקנות',
		installSkin: 'התקן עיצוב',
		installStarterKit: 'התקן ערכת התחלה',
		languages: 'שפות',
		localPackage: 'התקן חבילה מקומית',
		macros: 'מקרו',
		mediaTypes: 'סוגי מדיה',
		member: 'משתמשים',
		memberGroups: 'קבוצות משתמשים',
		memberRoles: 'כללים',
		memberTypes: 'סוגי משתמשים',
		documentTypes: 'סוגי מסמכים',
		packager: 'חבילות',
		packages: 'חבילות',
		repositories: 'התקן מתוך מאגר',
		runway: 'התקן Runway',
		runwayModules: 'מודולי Runway',
		scripting: 'קבצי סקריפטים',
		scripts: 'סקריפטים',
		stylesheets: 'גיליונות סגנון',
		templates: 'תבניות',
		userPermissions: 'הרשאות משתמש',
		userTypes: 'משתמש מקליד',
		users: 'משתמש',
	},
	update: {
		updateAvailable: 'עידכון חדש זמין',
		updateDownloadText: '%0% זמין, כאן להורדה',
		updateNoServer: 'אין תקשורת עם השרת',
		updateNoServerError: 'בדיקת עידכונים נכשלה. בדוק את ה trace-stack למידע נוסף',
	},
	user: {
		administrators: 'מנהל ראשי',
		categoryField: 'שדה קטגוריה',
		changePassword: 'שנה את הסיסמה שלך',
		changePasswordDescription: "בעמוד זה ניתן לשנות את הסיסמה שלך ולאחר מכן ללחוץ על הכפתור 'שנה סיסמה'\t למטה",
		contentChannel: 'ערוץ תוכן',
		descriptionField: 'שדה תיאור',
		disabled: 'נטרל משתמש',
		documentType: 'שדה מסמך',
		editors: 'עורך',
		excerptField: 'שדה תקציר',
		language: 'שפה',
		loginname: 'שם משתמש',
		mediastartnode: 'התחלה בפריט המדיה',
		modules: 'אזורים',
		noConsole: 'נטרל גישת אומברקו',
		password: 'סיסמה',
		passwordChanged: 'הסיסמה שונתה בהצלחה!',
		passwordConfirm: 'אישור סיסמה',
		passwordEnterNew: 'הזן את הסיסמה החדשה שלך',
		passwordIsBlank: 'שדה סיסמה לא יכול להיות ריק !',
		passwordIsDifferent: 'סיסמאות לא תואמות, אנא בדוק זאת ונסה שנית',
		passwordMismatch: 'אישור סיסמה לא תואם !',
		permissionReplaceChildren: 'החלף הרשאות בכל תתי הפריטים',
		permissionSelectedPages: 'הינך משנה הרשאות לעמודים הבאים:',
		permissionSelectPages: 'בחר עמוד/עמודים לשינוי הרשאות',
		searchAllChildren: 'חפש בכל הפריטים',
		startnode: 'התחלה בפריט התוכן',
		username: 'שם תצוגה',
		userPermissions: 'הרשאות משתמש',
		usertype: 'סוג משתמש',
		userTypes: 'סוגי משתמש',
		writer: 'כותב',
	},
	logViewer: {
		selectAllLogLevelFilters: 'בחר הכל',
		deselectAllLogLevelFilters: 'הסר סימון מהכל',
	},
} as UmbLocalizationDictionary;
