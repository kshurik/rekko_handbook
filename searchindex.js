Search.setIndex({"docnames": ["chapter1/baseline", "chapter1/collab_filter", "chapter1/content_filter", "chapter1/intro_to_rekko", "chapter1/ranker", "chapter1/validation_metrics", "index", "intro"], "filenames": ["chapter1/baseline.md", "chapter1/collab_filter.md", "chapter1/content_filter.md", "chapter1/intro_to_rekko.md", "chapter1/ranker.md", "chapter1/validation_metrics.md", "index.md", "intro.md"], "titles": ["Baseline", "Collaborative Filtering", "Content-based Filtering in a Nutshell", "Introduction to Recommendation Problem", "Ranking Problem", "Validation and Metrics", "Welcome To The World Of Recommendations and Ranking", "Table of Contents"], "terms": {"befor": [0, 1, 2, 5, 6], "we": [0, 1, 2, 3, 4, 5, 6], "dive": [0, 5, 6], "some": [0, 1, 2, 3, 4, 5], "let": [0, 1, 2, 3, 4, 5], "s": [0, 1, 2, 3, 4, 5, 6], "defin": [0, 1, 2, 3, 4, 5], "heurist": [0, 3], "must": [0, 3, 5], "beaten": 0, "It": [0, 1, 2, 3, 4, 5], "just": [0, 1, 2, 5], "case": [0, 1, 2, 3, 4, 5, 6], "recsi": [0, 6], "problem": [0, 1, 5, 6], "all": [0, 1, 2, 3, 4, 5, 6], "ml": [0, 2, 5, 6], "project": [0, 6], "you": [0, 1, 2, 4, 5, 6], "better": [0, 1], "start": [0, 1, 2, 3, 5, 6], "definit": [0, 5], "understand": [0, 1, 2, 5, 6], "effici": [0, 3, 6], "your": [0, 5], "sometim": [0, 1], "heuristic": 0, "base": [0, 3, 4, 5, 6], "algorithm": [0, 1, 3, 6], "do": [0, 2, 4, 5], "work": [0, 1, 2], "ok": [0, 3], "goal": [0, 1, 2, 4, 5], "user": [0, 1, 2, 3, 4, 5, 6], "busi": [0, 4, 6], "valu": [0, 1, 2, 4, 5, 6], "have": [0, 1, 2, 3, 4, 5, 6], "except": 0, "There": [0, 1, 3, 4, 5], "ar": [0, 1, 2, 3, 4, 5, 6], "variou": [0, 1, 2, 5, 6], "wai": [0, 2, 3, 5], "gener": [0, 1, 2, 3, 4, 5], "One": [0, 1, 4, 5], "them": [0, 2, 3, 5, 6], "popular": [0, 1, 2, 3, 4, 5, 6], "item": [0, 1, 2, 3, 4, 5], "metric": [0, 1, 3, 4, 6], "like": [0, 1, 2, 3, 5, 6], "rate": [0, 1, 3], "counter": 0, "watch": [0, 1, 2, 3, 4, 6], "time": [0, 1, 2, 3, 4, 5, 6], "number": [0, 1, 2, 4, 5], "purchas": [0, 3], "click": [0, 1, 3, 4, 6], "etc": [0, 1, 2, 3, 4, 5, 6], "also": [0, 1, 2, 3, 5, 6], "can": [0, 1, 2, 3, 4, 5, 6], "us": [0, 1, 2, 3, 4, 5, 6], "group": [0, 1, 3, 4], "segment": 0, "make": [0, 1, 2, 3, 4, 5], "more": [0, 1, 2, 3, 4, 5], "accur": [0, 1, 2, 5], "relev": [0, 1, 2, 3, 4, 5, 6], "extent": 0, "cours": 0, "here": [0, 1, 2, 4, 5], "wil": 0, "mean": [0, 2, 3, 5], "proxi": [0, 3], "In": [0, 1, 2, 3, 4, 5, 6], "thi": [0, 1, 2, 3, 4, 5], "chapter": [0, 5, 6], "i": [0, 1, 2, 3, 4, 5, 6], "walk": 0, "through": [0, 2, 5], "movielen": [0, 1, 2], "For": [0, 1, 2, 3, 4, 5], "conveni": [0, 5], "upload": 0, "googl": [0, 1, 2], "drive": [0, 1, 2], "central": 0, "access": 0, "anyon": 0, "below": [0, 1, 5], "url": [0, 1, 2], "main": [0, 3, 4], "dataset": [0, 1, 2], "link": [0, 1, 2], "share": [0, 1, 2, 5], "ratings_small_url": [0, 1], "http": [0, 1, 2], "com": [0, 1, 2, 6], "file": [0, 1, 2], "d": [0, 1, 2, 4, 5], "1blzfclls5a13tbnsjz1gpkhlwqonple4": [0, 1, 2], "view": [0, 1, 2, 3], "usp": [0, 1, 2], "share_link": [0, 1, 2], "movies_metadata_url": [0, 1, 2], "19g6": [0, 1, 2], "apybzb5d": [0, 1, 2], "wrj4l7aykhx": [0, 1, 2], "fdm4fb": [0, 1, 2], "now": [0, 1, 2, 3, 4, 5], "import": [0, 1, 2, 4, 5], "librari": [0, 1, 2, 5], "avail": [0, 1, 2, 3], "download": [0, 1, 2], "w": [0, 1, 2, 4], "o": [0, 1, 2], "ssl": [0, 1, 2], "verif": [0, 1, 2], "_create_default_https_context": [0, 1, 2], "_create_unverified_context": [0, 1, 2], "numpi": [0, 1, 2, 4, 5], "np": [0, 1, 2, 4, 5], "panda": [0, 1, 2, 5], "pd": [0, 1, 2, 5], "matplotlib": 0, "pyplot": 0, "plt": 0, "from": [0, 1, 2, 3, 4, 5, 6], "itertool": [0, 1, 4], "islic": [0, 1], "cycl": [0, 1], "product": [0, 1, 3, 4, 5, 6], "warn": [0, 1, 2], "filterwarn": [0, 1, 2], "ignor": [0, 1, 2, 5], "set_opt": 0, "displai": 0, "float_format": 0, "lambda": [0, 1], "x": [0, 2, 4], "2f": 0, "functinon": 0, "read_csv_from_gdr": [0, 1, 2], "get": [0, 1, 2, 3, 4, 5, 6], "provid": [0, 1, 2, 3, 5, 6], "def": [0, 1, 2, 5], "csv": [0, 1, 2], "given": [0, 1, 2, 4, 5], "taken": [0, 1, 2], "copi": [0, 2], "exampl": [0, 1, 3, 4, 5, 6], "file_id": [0, 1, 2], "split": [0, 1, 2, 5], "file_path": [0, 1, 2], "uc": [0, 1, 2], "export": [0, 1, 2], "id": [0, 1, 2], "read_csv": [0, 1, 2], "return": [0, 1, 2, 5], "2nd": 0, "one": [0, 1, 2, 4, 5, 6], "compute_popular": 0, "which": [0, 1, 3, 4, 5], "calcul": [0, 1, 2, 4, 5], "sort": [0, 4, 5], "top": [0, 1, 2, 3, 4, 5, 6], "k": [0, 1, 2, 4, 5], "requir": [0, 1, 2, 3, 4, 5], "df": [0, 1, 5], "datafram": [0, 1, 2, 5], "item_id": 0, "str": [0, 1, 2, 5], "max_candid": 0, "int": [0, 1, 2, 5], "titl": [0, 1, 2, 3, 6], "popular_titl": 0, "groupbi": 0, "agg": 0, "sort_valu": 0, "ascend": 0, "fals": [0, 1, 5], "head": [0, 1, 2], "index": [0, 2], "two": [0, 1, 2, 3, 4, 5, 6], "interact": [0, 1, 2, 3, 5], "refer": 0, "where": [0, 1, 4, 5, 6], "userid": [0, 1], "movieid": [0, 1], "timestamp": [0, 1], "our": [0, 1, 2, 3, 4, 5, 6], "so": [0, 1, 4, 5, 6], "call": [0, 1, 5], "target": [0, 1, 3, 4, 5], "movies_metadata": [0, 1, 2], "about": [0, 1, 2, 3], "movi": [0, 1, 2, 3, 4, 5], "overview": [0, 1, 2, 5, 6], "genr": [0, 1, 2, 3], "31": [0, 1], "50": [0, 2], "1260759144": [0, 1], "1029": [0, 1], "00": [0, 1], "1260759179": [0, 1], "1061": [0, 1], "1260759182": [0, 1], "1129": [0, 1], "1260759185": [0, 1], "4": [0, 1, 2, 5], "1172": [0, 1], "1260759205": [0, 1], "statist": 0, "look": [0, 1, 3, 5], "distribut": [0, 1, 4], "count": [0, 1, 2], "100004": [0, 1], "347": 0, "01": 0, "12548": 0, "66": 0, "54": 0, "1129639086": 0, "94": 0, "std": 0, "195": 0, "16": [0, 1, 2], "26369": 0, "20": [0, 1, 2, 5], "06": 0, "191685826": 0, "03": 0, "min": [0, 2], "789652009": 0, "25": 0, "182": 0, "1028": 0, "965847824": 0, "367": 0, "2406": 0, "1110421822": 0, "75": [0, 5], "520": 0, "5418": 0, "1296192495": 0, "max": [0, 5], "671": [0, 1], "163949": 0, "5": [0, 1, 2, 4, 5], "1476640644": 0, "style": 0, "ggplot": 0, "hist": 0, "distribt": 0, "see": [0, 1, 2, 5, 6], "most": [0, 1, 2, 3, 4, 5, 6], "right": [0, 1], "tail": 0, "fatter": 0, "move": [0, 1, 2, 4, 5], "metadata": 0, "inform": [0, 1, 2, 3, 4, 5], "film": [0, 1, 2, 3], "column": [0, 1, 2], "info": [0, 2], "type": [0, 1, 2, 3, 4, 5], "name": [0, 1, 2, 4], "straightforward": [0, 2, 4], "class": [0, 1, 2, 4], "core": [0, 2], "frame": [0, 2], "rangeindex": [0, 2], "45466": [0, 2], "entri": [0, 1, 2], "45465": [0, 2], "total": [0, 2, 5], "24": [0, 1], "non": [0, 1, 2], "null": [0, 2], "dtype": [0, 1, 2], "adult": [0, 1, 2], "object": [0, 2, 4, 5], "belongs_to_collect": [0, 1, 2], "4494": 0, "budget": [0, 1, 2], "homepag": [0, 1, 2], "7782": 0, "6": [0, 1, 2, 5], "imdb_id": [0, 1, 2], "45449": 0, "7": [0, 1, 2, 5], "original_languag": [0, 1, 2], "45455": 0, "8": [0, 1, 2], "original_titl": [0, 1, 2], "9": [0, 1, 2], "44512": [0, 2], "10": [0, 1, 2], "45461": 0, "11": [0, 2], "poster_path": [0, 2], "45080": 0, "12": [0, 1, 2], "production_compani": [0, 2], "45463": 0, "13": [0, 2, 5], "production_countri": [0, 2], "14": [0, 1, 2, 5], "release_d": [0, 1, 2], "45379": 0, "15": [0, 1, 2], "revenu": [0, 1, 2], "45460": 0, "float64": [0, 2], "runtim": [0, 1, 2, 6], "45203": 0, "17": [0, 2], "spoken_languag": [0, 1, 2], "18": [0, 2], "statu": [0, 1, 2], "19": [0, 2], "taglin": [0, 1, 2], "20412": 0, "21": 0, "video": [0, 1, 2], "22": [0, 1], "vote_averag": [0, 1, 2], "23": 0, "vote_count": [0, 1, 2], "memori": [0, 2], "usag": [0, 2, 6], "mb": [0, 2], "preprocess": [0, 2], "set": [0, 1, 2, 3, 4, 5], "similar": [0, 1, 2, 3, 5, 6], "leav": [0, 1, 5], "present": 0, "creat": [0, 1, 2, 3, 5], "recommendatino": 0, "mapper": [0, 1, 2], "first": [0, 1, 2, 3, 4, 5, 6], "need": [0, 1, 2, 3, 4, 5, 6], "merg": 0, "necessari": [0, 2, 6], "appropi": [0, 5], "relationship": [0, 1, 2, 3], "between": [0, 1, 2, 3, 4], "both": [0, 1, 3, 4, 5], "align": [0, 1], "astyp": [0, 1, 2], "renam": [0, 1, 2], "inplac": 0, "true": [0, 1, 2, 5], "onli": [0, 1, 2, 4, 5], "those": [0, 1, 5, 6], "intersect": [0, 1, 3], "each": [0, 1, 2, 3, 4, 5, 6], "other": [0, 2, 3, 4, 5, 6], "interactions_filt": [0, 1], "loc": [0, 1, 2, 5], "isin": [0, 1], "print": [0, 1, 4, 5], "shape": [0, 1], "44989": [0, 1], "input": [0, 1, 2, 4], "drop_dupl": 0, "reset_index": [0, 2, 5], "drop": [0, 5], "item_name_mapp": 0, "dict": [0, 1, 2], "zip": [0, 1, 2], "baselinerecommend": 0, "averag": [0, 1, 5], "possibl": [0, 2, 3, 4, 5, 6], "ani": [0, 1, 3, 4, 5], "The": [0, 1, 2, 3, 4, 5], "pipelin": [0, 2, 4, 5, 6], "python": [0, 6], "method": [0, 1, 2, 3, 4, 6], "end": [0, 1, 5], "logic": [0, 2, 5], "follow": [0, 1, 2, 4, 5], "initi": [0, 1, 2], "median": 0, "observ": [0, 3, 5], "recomm_common": 0, "list": [0, 1, 2, 4, 5], "If": [0, 2, 5], "e": [0, 3, 4, 6], "nan": [0, 1], "fill": [0, 2], "less": 0, "than": [0, 1, 4, 5], "candid": [0, 1, 2, 3, 4, 5], "popul": 0, "categori": 0, "wise": 0, "result": [0, 2, 4, 5], "how": [0, 1, 2, 3, 4, 5, 6], "mani": [0, 1, 3, 5, 6], "want": [0, 1, 5, 6], "item_column": 0, "user_column": 0, "Then": [0, 1, 3, 5, 6], "extract": [0, 2], "aggreg": [0, 1], "across": 0, "base_recommend": 0, "arrai": [0, 2, 5], "74727": 0, "128846": 0, "702": 0, "127728": 0, "65216": 0, "43267": 0, "8675": 0, "80717": 0, "86817": 0, "8699": 0, "872": 0, "27724": 0, "26791": 0, "876": 0, "64278": 0, "301": 0, "59392": 0, "3021": 0, "3112": 0, "1933": 0, "thu": [0, 1, 3, 4, 5, 6], "got": [0, 5, 6], "highest": [0, 3, 5], "discuss": [0, 2, 5, 6], "earlier": [0, 3], "same": [0, 1, 2, 3, 4, 5], "ha": [0, 1, 2, 3, 4, 5], "alreadi": [0, 1, 3], "implement": [0, 2, 3, 5, 6], "well": [0, 1, 2, 3, 5, 6], "save": 0, "dictionari": [0, 2], "known_item": 0, "appli": [0, 1], "to_dict": 0, "f": [0, 1, 4], "known": [0, 1, 5], "len": [0, 1], "n": [0, 1, 2, 4, 5], "check": [0, 1, 2, 5], "particaular": 0, "1371": 0, "1405": 0, "2105": 0, "2193": 0, "2294": 0, "2455": 0, "compon": [0, 3], "without": [0, 5, 6], "filter": [0, 3], "easili": 0, "approach": [0, 4, 5], "add": [0, 5], "artif": 0, "binari": [0, 1, 4, 5], "random": [0, 1, 4], "random_integ": 0, "rang": [0, 1], "groupwis": 0, "left": [0, 1], "group_recommend": 0, "363": 0, "1655": 0, "820": 0, "27523": 0, "5765": 0, "26843": 0, "26": 0, "1428": 0, "26422": 0, "54328": 0, "26578": 0, "93855": 0, "2981": 0, "392": 0, "output": [0, 1, 2, 6], "row": [0, 1], "next": [0, 1, 2, 3, 4], "recommn": 0, "take": [0, 1, 2, 4, 5, 6], "consid": [0, 1, 2, 3, 4, 5, 6], "granualar": 0, "estim": [0, 4, 5, 6], "give": [0, 1, 4, 5], "rec": [0, 1], "rekko": [0, 1], "867": 0, "And": 0, "an": [0, 1, 2, 3, 4, 5], "group_rekko": 0, "group_wise_rekko": 0, "join": 0, "assign": [0, 1, 2, 4], "further": [0, 1, 2, 3, 5, 6], "prettifi": 0, "code": [0, 1, 2, 5, 6], "support": 0, "paramet": [0, 1, 2, 4, 5], "go": [0, 1, 2, 4, 5, 6], "classic": [0, 1, 5, 6], "item_col": [0, 1], "none": [0, 1, 5], "run": [0, 2], "option": [0, 1], "els": [0, 1], "abov": [0, 2, 5], "seri": [0, 5], "alwai": 0, "show": [0, 1, 2], "dozen": 0, "instantli": 0, "deep": [0, 1], "check_rec": 0, "congrat": 0, "basic": [0, 1, 4, 5, 6], "system": [0, 1, 2, 3, 4, 5, 6], "readi": [0, 1, 6], "section": [0, 2, 3, 6], "evalu": [0, 5], "power": [1, 2], "recommend": [1, 4, 5], "predict": [1, 3, 4, 5], "prefer": [1, 2, 3, 5, 6], "interest": [1, 2, 3, 4, 6], "notion": 1, "peopl": 1, "who": [1, 2, 3], "tast": [1, 4], "domain": [1, 4], "differ": [1, 2, 3, 4, 5, 6], "techniqu": [1, 3], "seek": 1, "identifi": [1, 2, 5], "opinion": 1, "done": [1, 3, 4, 5], "find": [1, 2, 4, 5, 6], "question": [1, 2], "would": [1, 2, 5, 6], "neighborhood": 1, "reli": [1, 5], "behavior": [1, 2, 3], "idea": [1, 2, 3, 4], "common": 1, "A": 1, "cosin": [1, 2, 4], "pearson": 1, "correl": 1, "coeffici": 1, "often": [1, 2, 3, 5], "measur": [1, 5], "score": [1, 4, 5], "onc": [1, 4, 5], "anoth": [1, 4, 5], "highli": 1, "thei": [1, 2, 3, 5, 6], "advantag": 1, "easi": [1, 2, 6], "interpret": [1, 2], "rel": [1, 4], "simpl": [1, 2], "doe": [1, 3, 5], "lot": [1, 2, 5], "comput": [1, 4, 5], "resourc": [1, 6], "addition": 1, "effect": [1, 3], "when": [1, 2, 3, 4, 5], "matrix": 1, "spars": 1, "howev": [1, 3, 4, 5, 6], "sever": 1, "disadvantag": 1, "major": 1, "limit": 1, "prone": 1, "cold": [1, 3, 5], "occur": [1, 3], "enough": 1, "computation": [1, 4], "expens": [1, 4], "larg": [1, 3], "sai": [1, 2, 4], "contain": [1, 2, 6], "four": 1, "five": 1, "b": [1, 3], "c": [1, 4], "To": [1, 2, 4, 5], "pair": [1, 4], "pcc": 1, "perfectli": 1, "neg": [1, 4, 5], "posit": [1, 2, 3, 4, 5], "assum": [1, 2, 4], "user_a": 1, "user_b": 1, "corrcoef": 1, "8488746876271654": 1, "indic": [1, 2, 5], "strong": 1, "out": [1, 5, 6], "weight": [1, 5], "yet": [1, 6], "sinc": 1, "around": 1, "therefor": [1, 2, 3, 5, 6], "wrap": 1, "up": [1, 4, 5, 6], "took": 1, "while": [1, 4, 5], "could": [1, 5, 6], "machin": [1, 3, 5, 6], "learn": [1, 2, 3, 4, 5, 6], "factor": 1, "decompos": 1, "lower": [1, 2, 5], "dimension": [1, 2], "matric": 1, "repres": [1, 2], "latent": 1, "attribut": [1, 2], "dot": 1, "typic": [1, 2, 5], "perform": [1, 2, 5], "singular": 1, "decomposit": 1, "svd": 1, "thatm": 1, "approxim": [1, 4, 5], "worth": [1, 4], "mention": [1, 2, 3, 4], "try": [1, 3, 4], "rather": [1, 4], "being": [1, 2], "abl": [1, 4, 5, 6], "restor": 1, "fulli": 1, "biggest": 1, "sigma": [1, 4], "middl": 1, "toi": [1, 2], "peculiar": 1, "good": [1, 5, 6], "rank": [1, 3], "regress": [1, 4], "quit": [1, 3, 4], "rerank": [1, 5], "embed": [1, 3, 4, 6], "calcualt": [1, 2], "choos": 1, "its": [1, 3, 4, 6], "mai": [1, 3, 5, 6], "scale": 1, "altern": 1, "least": 1, "squar": [1, 5], "al": 1, "modif": [1, 2, 5], "implicit": [1, 3], "ial": 1, "stochast": 1, "gradient": [1, 4], "descent": [1, 4], "sgd": 1, "neural": [1, 2, 4], "network": [1, 2, 3, 4], "represent": [1, 2], "captur": [1, 5], "complex": [1, 5], "pattern": [1, 3, 5], "linear": 1, "extreem": 1, "xdeepfm": 1, "handl": 1, "been": [1, 2, 3, 5], "especi": [1, 5], "obvious": 1, "minim": [1, 4], "loss": [1, 4, 5], "difficult": 1, "why": [1, 4, 5], "certain": 1, "made": [1, 4], "amount": [1, 3], "challeng": 1, "choic": [1, 4], "faster": 1, "deal": 1, "scipi": 1, "linalg": 1, "sklearn": 1, "util": 1, "extmath": 1, "randomized_svd": 1, "truncatedsvd": 1, "besid": 1, "optim": [1, 4], "These": [1, 3, 4, 5], "design": 1, "reconstruct": 1, "error": [1, 5], "fix": [1, 2], "begin": 1, "l_": 1, "explicit": [1, 3], "sum": [1, 2, 4, 5], "limits_": 1, "u": 1, "r_": 1, "ui": 1, "x_": 1, "y_": 1, "t": [1, 4], "big": [1, 4], "vert": 1, "x_u": 1, "y_i": [1, 5], "specifi": 1, "wa": [1, 2, 3, 4, 6], "control": 1, "regular": 1, "strength": [1, 5], "prevent": 1, "overfit": [1, 5], "vector": [1, 2], "As": [1, 2, 3, 5], "correspond": [1, 4], "histori": [1, 3], "repeat": 1, "process": [1, 2, 3, 4, 5, 6], "until": [1, 2], "converg": 1, "minimum": [1, 6], "feedback": 1, "whether": [1, 4, 5, 6], "incorpor": [1, 4, 5], "confid": 1, "scheme": [1, 3, 5], "higher": [1, 4, 5, 6], "frequent": [1, 5], "previou": 1, "almost": [1, 2], "step": [1, 4, 5], "account": [1, 5], "conclud": 1, "focus": 1, "allow": [1, 2, 5, 6], "build": [1, 5, 6], "addit": [1, 2, 3, 4, 6], "knn": 1, "hard": [1, 2, 6], "due": [1, 3], "dynam": 1, "natur": 1, "real": [1, 2, 4, 5], "updat": 1, "kick": 1, "off": 1, "point": [1, 2, 3, 5], "assumpt": [1, 2], "underli": [1, 4], "featur": [1, 2, 3, 4], "logist": [1, 4], "resembl": [1, 4], "logit": 1, "probabilist": 1, "reduc": [1, 3, 5], "impact": [1, 4, 5], "miss": [1, 2], "bayesian": 1, "person": [1, 2, 3], "Its": 1, "optimizit": 1, "instanc": [1, 3, 4], "level": [1, 3, 5], "instead": [1, 4], "primari": 1, "directli": [1, 4], "were": [1, 5, 6], "tutori": 1, "ligthfm": 1, "realiti": [1, 5], "maintan": 1, "decid": [1, 4, 6], "switch": 1, "final": [1, 2, 3, 4, 5, 6], "side": [1, 6], "similarli": 1, "fast": 1, "develop": [1, 3, 4, 5, 6], "cython": 1, "adagrad": 1, "adadelta": 1, "great": [1, 5], "explan": [1, 2, 4, 6], "found": [1, 3, 4, 5], "brp": 1, "pairwis": [1, 4], "warp": 1, "os": 1, "sourc": [1, 2, 3, 4], "kaggl": [1, 2], "www": [1, 2], "quangnhatbui": [1, 2], "sp": 1, "tqdm": [1, 2], "tqdm_notebook": [1, 2], "along": [1, 4], "exist": 1, "okko": [1, 3, 6], "platform": [1, 3], "10194": 1, "stori": 1, "collect": [1, 5], "30000000": 1, "anim": 1, "35": 1, "toystori": 1, "disnei": 1, "862": 1, "tt0114709": 1, "en": 1, "led": [1, 2], "woodi": [1, 2], "andi": [1, 2], "live": [1, 2], "happili": [1, 2], "hi": [1, 2, 6], "1995": 1, "30": 1, "373554033": 1, "81": 1, "iso_639_1": 1, "english": [1, 2], "releas": 1, "5415": 1, "65000000": 1, "adventur": 1, "8844": 1, "tt0113497": 1, "jumanji": 1, "sibl": [1, 2], "judi": [1, 2], "peter": [1, 2], "discov": [1, 2], "encha": 1, "262797249": 1, "104": 1, "iso": 1, "roll": 1, "dice": 1, "unleash": 1, "excit": 1, "2413": 1, "119050": 1, "grumpi": 1, "old": 1, "men": 1, "10749": 1, "romanc": 1, "15602": 1, "tt0113228": 1, "grumpier": 1, "famili": 1, "wed": 1, "reignit": 1, "ancient": 1, "feud": 1, "101": 1, "still": [1, 4], "yell": 1, "fight": 1, "92": 1, "convert": [1, 4], "fit": [1, 5], "coordin": 1, "format": 1, "achiev": [1, 4, 5], "coo_matrix": 1, "get_coo_matrix": 1, "user_col": 1, "users_map": 1, "movies_map": 1, "weight_col": 1, "ones": [1, 3, 4, 5], "float32": 1, "interaction_matrix": 1, "map": [1, 2, 4, 5], "users_inv_map": 1, "enumer": [1, 2, 5], "uniqu": [1, 3], "v": [1, 2], "movies_inv_map": 1, "2830": 1, "whole": [1, 4], "hw": 1, "test": [1, 5], "train_mat": 1, "tocsr": 1, "671x2830": 1, "store": 1, "element": 1, "compress": 1, "cosinerecommend": 1, "bm25recommend": 1, "tfidfrecommend": 1, "bpr": 1, "nearest_neighbour": 1, "note": 1, "form": 1, "transpos": 1, "coo": 1, "cosine_model": 1, "100": [1, 5], "49411": 1, "46it": 1, "sens": [1, 2], "top_n": 1, "user_id": [1, 5], "iloc": 1, "row_id": 1, "movie_name_mapp": 1, "filter_already_liked_item": 1, "col_id": 1, "inv_movie_id": 1, "653": 1, "861587": 1, "74458": 1, "mere": 1, "brother": 1, "ki": 1, "dulhan": 1, "129": 1, "844531": 1, "1994": 1, "danger": 1, "game": [1, 2], "606": 1, "654064": 1, "8011": 1, "highland": 1, "iii": 1, "sorcer": 1, "294": 1, "625141": 1, "70": 1, "million": 1, "dollar": 1, "babi": 1, "337": 1, "593856": 1, "170": 1, "28": 1, "dai": [1, 5], "later": [1, 5], "648": 1, "577499": 1, "68954": 1, "longitud": 1, "579": 1, "571681": 1, "5956": 1, "joshua": 1, "399": 1, "561442": 1, "1088": 1, "whale": 1, "rider": 1, "278": 1, "1584": 1, "school": [1, 6], "rock": 1, "150": 1, "557086": 1, "2100": 1, "last": [1, 5], "castl": 1, "practic": [1, 5, 6], "combin": [1, 2, 3, 4, 5], "leverag": [1, 3], "improv": [1, 5], "accuraci": [1, 5], "refin": [1, 3, 5], "situat": 1, "veri": [1, 6], "finnal": 2, "particular": [2, 4], "might": [2, 3], "notic": 2, "aris": [2, 5], "speak": [2, 4], "pretti": 2, "intrigu": 2, "part": [2, 3, 5, 6], "evolut": 2, "text": 2, "hot": 2, "encod": 2, "scientist": 2, "remov": 2, "symbol": 2, "word": [2, 5], "gram": 2, "3": [2, 4, 5, 6], "charact": 2, "notwithstand": 2, "fact": 2, "human": 2, "languag": 2, "sophist": 2, "depend": [2, 4, 6], "context": [2, 4], "techiniqu": 2, "fail": [2, 4], "becom": [2, 3], "stage": 2, "unlik": 2, "meaning": 2, "continu": [2, 4], "space": 2, "behind": [2, 4], "numer": [2, 5], "length": [2, 5], "imagin": 2, "review": 2, "amaz": 2, "incred": 2, "becaus": [2, 5, 6], "man": 2, "woman": 2, "relat": [2, 5], "classifi": [2, 4], "document": [2, 4], "appropri": 2, "second": [2, 3, 4, 6], "visual": 2, "By": [2, 5], "plot": 2, "tool": 2, "summari": 2, "sclassifi": 2, "filtter": 2, "word2vec": 2, "varieti": [2, 3, 5], "applic": [2, 4], "music": [2, 3], "suggest": [2, 3], "restaur": 2, "travel": 2, "destin": 2, "ll": 2, "past": [2, 3], "analyz": [2, 3], "term": [2, 4, 5], "director": 2, "actor": [2, 3], "even": [2, 6], "previous": [2, 3], "romant": 2, "comedi": 2, "julia": 2, "robert": 2, "listen": 2, "taylor": 2, "swift": 2, "song": [2, 3], "artist": 2, "industri": [2, 3, 6], "nudg": 2, "increas": [2, 3, 4, 6], "seem": 2, "realli": [2, 4], "conclus": 2, "jump": 2, "via": [2, 4, 6], "detail": [2, 3, 4], "sligh": 2, "remain": 2, "re": [2, 5], "nltk": 2, "ast": 2, "literal_ev": 2, "pymystem3": 2, "mystem": 2, "string": 2, "punctuat": 2, "corpu": 2, "stopword": 2, "token": 2, "word_token": 2, "taggeddocu": 2, "stop": 2, "beforehand": 2, "nltk_data": 2, "packag": 2, "home": 2, "runner": 2, "unzip": 2, "corpora": 2, "init": 2, "lemmat": 2, "slow": 2, "word_tokenize_clean": 2, "doc": 2, "stop_word": 2, "alphabet": 2, "includ": [2, 3, 5], "isalpha": 2, "instal": 2, "local": 2, "bin": 2, "cdn": 2, "yandex": 2, "net": [2, 4], "linux": 2, "64bit": 2, "tar": 2, "gz": 2, "read": 2, "bit": 2, "movies_metadada": 2, "model_index": 2, "match": 2, "back": [2, 6], "clean": 2, "tag": 2, "creatin": 2, "col": 2, "sampl": [2, 4, 5], "origin": [2, 4], "isnul": 2, "int64": 2, "model_idnex": 2, "movies_inv_mapp": 2, "tags_corpu": 2, "sub": 2, "tags_doc": 2, "descript": 2, "room": 2, "birthdai": 2, "bring": [2, 6], "buzz": 2, "lightyear": 2, "onto": 2, "scene": 2, "afraid": 2, "lose": 2, "place": [2, 4, 6], "heart": 2, "against": 2, "But": 2, "circumst": 2, "separ": [2, 3], "owner": 2, "duo": 2, "eventu": 2, "put": [2, 3, 6], "asid": 2, "execut": 2, "what": [2, 3, 4, 5], "prove": 2, "insid": 2, "year": [2, 3], "door": 2, "world": 2, "open": 2, "giant": 2, "three": [2, 4, 5], "rhinoceros": 2, "board": 2, "magic": 2, "alan": 2, "finish": 2, "monkei": 2, "trap": 2, "riski": 2, "terrifi": 2, "hope": 2, "enchant": 2, "freedom": 2, "unwittingli": 2, "evil": 2, "invit": 2, "creatur": 2, "paramt": 2, "vec_siz": 2, "alpha": [2, 4], "02": 2, "param": 2, "min_alpha": 2, "00025": 2, "min_count": 2, "occurr": 2, "epoch": 2, "vector_s": 2, "dm": 2, "vocab": 2, "build_vocab": 2, "total_exampl": 2, "corpus_count": 2, "ourselv": 2, "batman": [2, 5], "load": 2, "built": 2, "most_similar": 2, "movie_id": 2, "8603": 2, "movies_vector": 2, "dv": 2, "movie_embed": 2, "docvec": 2, "topn": 2, "model_scor": 2, "000000": 2, "7772": 2, "960244": 2, "13835": 2, "958007": 2, "5713": 2, "957228": 2, "18468": 2, "956848": 2, "revers": 2, "name_mapp": 2, "title_nam": 2, "island": 2, "earth": 2, "k2": 2, "rollov": 2, "petrifi": 2, "29872": 2, "949771": 2, "angel": 2, "die": 2, "26340": 2, "946402": 2, "sieg": 2, "firebas": 2, "gloria": 2, "44339": 2, "945498": 2, "underground": 2, "27658": 2, "943779": 2, "giperboloid": 2, "inzhenera": 2, "garina": 2, "43009": 2, "943584": 2, "ultim": [2, 5], "aveng": 2, "40695": 2, "943214": 2, "krakh": 2, "14178": 2, "943049": 2, "battl": 2, "terra": 2, "9883": 2, "941377": 2, "kaij\u016b": 2, "daisens\u014d": 2, "30846": 2, "940967": 2, "scoobi": 2, "doo": 2, "cyber": 2, "chase": 2, "43461": 2, "940383": 2, "megafault": 2, "43165": 2, "940173": 2, "zookeep": 2, "wife": 2, "27681": 2, "939384": 2, "l": 2, "umanoid": 2, "12196": 2, "939323": 2, "5ive": 2, "girl": 2, "19869": 2, "938772": 2, "lost": 2, "missil": 2, "44262": 2, "938741": 2, "quest": 2, "delta": [2, 4], "knight": 2, "accord": [3, 5], "criterion": 3, "smart": 3, "new": 3, "feed": [3, 4], "contact": 3, "search": [3, 4, 6], "respons": [3, 4], "ride": 3, "stuff": [3, 6], "reffer": 3, "model": [3, 5, 6], "data": [3, 4, 5, 6], "individu": 3, "servic": [3, 5, 6], "onlin": [3, 6], "stream": [3, 6], "retail": 3, "watcher": 3, "custom": [3, 6], "date": [3, 5, 6], "site": 3, "social": 3, "much": [3, 4, 6], "spent": 3, "mostli": 3, "architectur": [3, 4, 6], "own": [3, 5], "distinct": [3, 4, 5], "purpos": 3, "togeth": 3, "At": 3, "characterist": 3, "extern": 3, "media": 3, "gather": 3, "precis": [3, 5], "insight": 3, "1st": 3, "profil": 3, "reflect": [3, 5], "tailor": 3, "ensur": [3, 5], "truli": 3, "overal": 3, "queri": [3, 4, 6], "maxim": [3, 4], "recal": [3, 5], "1": [3, 4, 5, 6], "scenario": 3, "focu": [3, 4], "divid": [3, 5], "content": [3, 6], "collabor": 3, "hybrid": 3, "mix": 3, "compar": [3, 5], "meta": 3, "determin": [3, 4, 5], "watche": 3, "furthemor": 3, "successfulli": [3, 5], "amazon": 3, "compani": [3, 6], "netflix": [3, 6], "spotifi": 3, "tinder": 3, "increasingli": 3, "recent": 3, "rise": 3, "cinema": [3, 6], "lead": [3, 5, 6], "satisfact": [3, 6], "loyalti": 3, "help": [3, 5, 6], "cost": [3, 4], "regard": 3, "usual": [3, 4, 5], "robust": 3, "aim": [3, 6], "likelihood": [3, 4], "complet": 3, "event": [3, 5], "rare": 3, "preliminari": 3, "research": [3, 4, 6], "should": [3, 5], "special": [3, 6], "thorough": [3, 5], "analysi": 3, "book": [3, 5, 6], "again": [3, 5], "groceri": 3, "baselin": [3, 5], "task": [3, 4, 5], "supervis": 4, "semi": 4, "order": [4, 5], "commonli": 4, "engin": [4, 6], "vital": 4, "strictli": 4, "stand": [4, 5], "q": 4, "classif": 4, "widespread": 4, "label": [4, 5], "singl": 4, "comparison": 4, "within": 4, "pointwis": 4, "regressor": 4, "distanc": 4, "bm25": 4, "advanc": 4, "version": 4, "tf": 4, "idf": 4, "swap": 4, "ranknet": 4, "lambdarank": 4, "lambdamart": 4, "function": [4, 5], "tri": [4, 6], "genral": 4, "formula": [4, 5], "p_": 4, "ij": 4, "equiv": 4, "p": [4, 5], "u_": 4, "j": 4, "frac": [4, 5], "exp": 4, "s_": 4, "propos": 4, "probabl": 4, "taket": 4, "2": [4, 5, 6], "0": [4, 5], "respect": 4, "deriv": 4, "after": 4, "dure": [4, 5, 6], "r": 4, "explain": [4, 6], "ndcg": [4, 5], "lambda_": 4, "partial": 4, "chang": [4, 5], "multipl": [4, 5], "tree": 4, "mart": 4, "boost": 4, "solv": 4, "On": 4, "experiment": 4, "outperform": 4, "come": [4, 5], "listwis": 4, "fot": 4, "direct": 4, "retriev": 4, "ir": 4, "softrank": 4, "adarank": 4, "knowledg": [4, 6], "listnet": 4, "listml": 4, "describ": 4, "properti": 4, "aforement": [4, 5], "uss": 4, "cross": 4, "entropi": 4, "coincid": 4, "over": [4, 5], "permut": 4, "appear": [4, 5], "ground": 4, "truth": 4, "actual": 4, "involv": [4, 5, 6], "godfath": 4, "avatar": 4, "ozark": [4, 5], "objetc": 4, "movies_to_rank": 4, "permutations_list": 4, "paper": 4, "pi": 4, "prod": 4, "n_": 4, "phi": 4, "wow": 4, "break": 4, "down": 4, "transform": 4, "higer": 4, "pick": 4, "randomli": 4, "seed": 4, "42": 4, "scores_dict": 4, "randn": 4, "4967141530112327": 4, "13826430117118466": 4, "6476885381006925": 4, "unpack": 4, "score_movie_pos_1": 4, "score_movie_pos_2": 4, "score_movie_pos_3": 4, "combinr": 4, "vs": 4, "first_term": 4, "second_term": 4, "third_term": 4, "third": 4, "37134497560948915": 4, "3130383332220924": 4, "far": 4, "3_": 4, "equal": 4, "permutation_proba": 4, "11624521221519304": 4, "manner": 4, "know": [4, 5, 6], "life": 4, "kl": 4, "diverg": 4, "thank": 4, "futher": 4, "too": [4, 5], "author": 4, "avoid": 4, "maximum": 4, "mle": 4, "framework": [4, 6], "log": 4, "under": [4, 5], "mallow": 4, "equival": 4, "kendal": 4, "tau": 4, "specif": 5, "everyon": 5, "train": 5, "care": 5, "consider": 5, "aspect": 5, "kei": 5, "essenti": 5, "expect": 5, "assess": 5, "detect": 5, "issu": 5, "bia": 5, "imposs": 5, "correctli": 5, "potenti": 5, "erorr": 5, "carri": 5, "holdout": 5, "fold": 5, "stratifi": 5, "subset": 5, "round": 5, "unseen": 5, "iter": 5, "hold": 5, "overcom": 5, "imbalanc": 5, "scikit": 5, "moreov": 5, "simplifi": [5, 6], "intuit": 5, "window": 5, "slidig": 5, "cumul": 5, "bias": 5, "inaccur": 5, "unfair": 5, "address": 5, "adjust": 5, "answer": 5, "interv": 5, "fir": 5, "ranker": 5, "complic": 5, "global": 5, "local_train": 5, "local_test": 5, "ranker_train": 5, "ranker_test": 5, "imit": 5, "datetim": 5, "dt": 5, "train_max_d": 5, "2023": 5, "test_interval_dai": 5, "test_max_d": 5, "timedelta": 5, "artifici": 5, "date_tim": 5, "global_train": 5, "global_test": 5, "warm": 5, "did": [5, 6], "anyth": 5, "benefit": 5, "drawback": 5, "success": 5, "firstli": 5, "gaug": 5, "select": 5, "best": 5, "hand": [5, 6], "secondli": 5, "weak": 5, "area": 5, "generaliz": 5, "seen": 5, "absolut": 5, "mae": 5, "sum_": 5, "x_i": 5, "mse": 5, "standard": 5, "wide": 5, "Their": 5, "elabor": 5, "tp": 5, "fp": 5, "fn": 5, "tn": 5, "threshold": 5, "cut": 5, "scroll": 5, "thant": 5, "precission_at_k": 5, "y_true": 5, "y_pred": 5, "float": 5, "labl": 5, "cutoff": 5, "argsort": 5, "y_true_sort": 5, "true_posit": 5, "3333333333333333": 5, "TO": 5, "BE": 5, "homework": 5, "student": 5, "IS": 5, "submit": 5, "high": 5, "reciproc": 5, "normal": 5, "discount": 5, "gain": 5, "mrr": 5, "invers": 5, "rank_i": 5, "rekkos_list": 5, "haryi": 5, "potter": 5, "thor": 5, "someth": 5, "harri": 5, "44": 5, "keep": 5, "mind": 5, "reciprocal_rank": 5, "val": 5, "ap": 5, "r_user": 5, "rel_i": 5, "user_i": 5, "something2": 5, "multipli": 5, "yourself": 5, "mathrm": 5, "dcg_": 5, "idcg_": 5, "denomin": 5, "cg": 5, "grade": 5, "unaffect": 5, "irrelev": 5, "cg_": 5, "rel_": 5, "exactli": 5, "equalt": 5, "dcg": 5, "premis": 5, "penal": 5, "logarithm": 5, "proport": 5, "log_": 5, "alredi": 5, "ideal": 5, "introduc": 5, "idcg": 5, "rel_k": 5, "tabl": 5, "shown": 5, "585": 5, "893": 5, "322": 5, "387": 5, "807": 5, "069": 5, "849": 5, "monoton": 5, "decreas": 5, "416": 5, "292": 5, "595": 5, "95": 5, "ofr": 5, "compute_gain": 5, "constant": 5, "math": [5, 6], "log2": 5, "y_valu": 5, "gain_schem": 5, "exp2": 5, "const": 5, "idx": 5, "ys_pred": 5, "pred": 5, "calc": 5, "preds_dcg": 5, "max_possible_dcg": 5, "9488107485678985": 5, "turn": 5, "modifi": 5, "my": 6, "current": 6, "workpalc": 6, "promot": 6, "spend": 6, "leisur": 6, "effort": 6, "commerc": 6, "bank": 6, "signifficantli": 6, "sale": 6, "topic": 6, "am": 6, "shuhrat": 6, "todai": 6, "journei": 6, "had": 6, "vast": 6, "experienec": 6, "metal": 6, "mine": 6, "consult": 6, "marketplac": 6, "platofrm": 6, "master": 6, "intern": 6, "econom": 6, "financ": 6, "bsc": 6, "minor": 6, "scienc": 6, "reach": 6, "me": 6, "telegram": 6, "kshurik": 6, "email": 6, "khalilbekov92": 6, "gmail": 6, "linkedin": 6, "skhalilbekov": 6, "guid": 6, "among": 6, "face": 6, "difficulti": 6, "backend": 6, "latenc": 6, "heavi": 6, "unfortun": 6, "theori": 6, "refresh": 6, "everyth": 6, "memor": 6, "field": 6, "perfom": 6, "folk": 6, "tech": 6, "gui": 6, "myself": 6, "degre": 6, "though": 6, "uni": 6, "hell": 6, "jupyt": 6, "notebook": 6, "theoret": 6, "deploy": 6, "experi": 6, "repositori": 6, "poetri": 6, "lock": 6, "replic": 6, "copypast": 6, "cover": 6, "microservic": 6, "pro": 6, "con": 6, "cool": 6}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"baselin": 0, "0": [0, 1, 2], "configur": [0, 1, 2], "1": [0, 1, 2], "modul": [0, 1, 2], "function": [0, 1, 2], "2": [0, 1, 2], "data": [0, 1, 2], "load": [0, 1], "describ": 0, "prepar": [0, 1, 2], "3": [0, 1], "model": [0, 1, 2, 4], "fit": 0, "recommend": [0, 2, 3, 6], "wrap": 0, "everyth": 0, "pretti": 0, "part": 0, "collabor": 1, "filter": [1, 2], "memori": 1, "base": [1, 2], "other": 1, "python": 1, "implement": 1, "helper": [1, 2], "avoid": [1, 2], "copi": 1, "past": 1, "main": [1, 2], "train": [1, 2, 4], "evalu": [1, 2], "hybrid": 1, "approach": [1, 2], "content": [2, 7], "nutshel": 2, "embed": 2, "explain": 2, "gensim": 2, "exampl": 2, "doc2vec": 2, "copypast": 2, "introduct": [3, 6], "problem": [3, 4], "rank": [4, 5, 6], "learnig": 4, "valid": 5, "metric": 5, "method": 5, "regress": 5, "classif": 5, "confus": 5, "matrix": 5, "welcom": 6, "To": 6, "The": 6, "world": 6, "Of": 6, "self": 6, "motiv": 6, "behind": 6, "thi": 6, "handbook": 6, "few": 6, "word": 6, "about": 6, "structur": 6, "tabl": 7}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})