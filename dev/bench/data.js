window.BENCHMARK_DATA = {
  "lastUpdate": 1712091615726,
  "repoUrl": "https://github.com/alancai98/partiql-lang-kotlin",
  "entries": {
    "JMH Benchmark": [
      {
        "commit": {
          "author": {
            "email": "107505258+yliuuuu@users.noreply.github.com",
            "name": "yliuuuu",
            "username": "yliuuuu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e5d4a637871bccb90f49596d043549e22c15a51",
          "message": "Next dev version (#972)\n\n* set next dev version",
          "timestamp": "2023-01-27T09:57:12-08:00",
          "tree_id": "76d3175d577e26d21b4d5682b498e70e9f74501e",
          "url": "https://github.com/alancai98/partiql-lang-kotlin/commit/6e5d4a637871bccb90f49596d043549e22c15a51"
        },
        "date": 1675119158472,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLCompiler15",
            "value": 123.07179083689394,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLCompiler30",
            "value": 286.36894126171546,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator15",
            "value": 457100.2878833332,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator30",
            "value": 898223.966,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator30WithData10",
            "value": 8846448.957200002,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLParser15",
            "value": 217.47123096010495,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLParser30",
            "value": 423.21402080964145,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameCaseWhenThen",
            "value": 41.69387823197911,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery",
            "value": 56.81959527023919,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery01",
            "value": 265.2255326829678,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery02",
            "value": 424.0388534481399,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameExceptUnionIntersectSixty",
            "value": 221.56991479085863,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameExec20Expressions",
            "value": 61.05961657946028,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameFromLet",
            "value": 42.08791588969569,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGraphPattern",
            "value": 41.9571087465275,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGraphPreFilters",
            "value": 64.58818548304579,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGroupLimit",
            "value": 45.07259507537592,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameLongFromSourceOrderBy",
            "value": 63.94444181272164,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameManyJoins",
            "value": 59.42328681810551,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameNestedAggregates",
            "value": 104.46996391749022,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameNestedParen",
            "value": 19.097251471517474,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNamePivot",
            "value": 68.09875363112293,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuery15OrsAndLikes",
            "value": 221.0324904687634,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuery30Plus",
            "value": 112.60794685566411,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryFunc",
            "value": 44.86931855029112,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryFuncInProjection",
            "value": 90.22510320957025,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryList",
            "value": 77.16766557712229,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryNestedSelect",
            "value": 648.795461022752,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuerySimple",
            "value": 16.343997443008636,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralJoins",
            "value": 23.038781283958798,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralProjections",
            "value": 72.42765672282152,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralSelect",
            "value": 194.11481274680574,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSimpleInsert",
            "value": 30.830169743492245,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeJoins",
            "value": 23.92761410417993,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeProjections",
            "value": 31.97922997764896,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeSelect",
            "value": 51.24896664998151,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameTimeZone",
            "value": 25.81226730469287,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameVeryLongQuery",
            "value": 314.98730990943466,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameVeryLongQuery01",
            "value": 1014.2173846448999,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameCaseWhenThen",
            "value": 30.67308554894285,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameComplexQuery",
            "value": 284.69991760376894,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameComplexQuery01",
            "value": 131.01513526030385,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameExceptUnionIntersectSixty",
            "value": 245.84311574106977,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameExec20Expressions",
            "value": 77.57368218519841,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameFromLet",
            "value": 44.720300893118846,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGraphPattern",
            "value": 45.978246057139586,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGraphPreFilters",
            "value": 79.24062922377637,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGroupLimit",
            "value": 42.14492296546307,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameLongFromSourceOrderBy",
            "value": 155.86272529251107,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameManyJoins",
            "value": 53.30138124425273,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameNestedAggregates",
            "value": 108.54826377260201,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameNestedParen",
            "value": 92.92885021130209,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNamePivot",
            "value": 78.12348203322613,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuery15OrsAndLikes",
            "value": 205.18481815207656,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuery30Plus",
            "value": 72.92063814337843,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryFunc",
            "value": 144.73660129998945,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryFuncInProjection",
            "value": 112.76662689869886,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryList",
            "value": 93.21787333024183,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryNestedSelect",
            "value": 155.56644587226984,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuerySimple",
            "value": 14.055418893431158,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralJoins",
            "value": 89.52878009562296,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralProjections",
            "value": 63.28371462095818,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralSelect",
            "value": 130.353783261968,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSimpleInsert",
            "value": 25.179284840356697,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeJoins",
            "value": 24.989881005452144,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeProjections",
            "value": 22.345792941714265,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeSelect",
            "value": 40.141337950003795,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameTimeZone",
            "value": 10.06085194093641,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameVeryLongQuery",
            "value": 473.59769187442714,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameVeryLongQuery01",
            "value": 1334.5892194209096,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLCompiler",
            "value": 9.994125901694314,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLEvaluator",
            "value": 2.685110108884898,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLParser",
            "value": 13.50018897051038,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "caialan@amazon.com",
            "name": "Alan Cai",
            "username": "alancai98"
          },
          "committer": {
            "email": "caialan@amazon.com",
            "name": "Alan Cai",
            "username": "alancai98"
          },
          "distinct": true,
          "id": "168cde88b891f85db38e711ee4d380cbc0d229fa",
          "message": "Disable gh to wiki action",
          "timestamp": "2023-01-31T12:04:01-08:00",
          "tree_id": "3fc8e7c33dcee9d51b5828e16b03f456b2c18601",
          "url": "https://github.com/alancai98/partiql-lang-kotlin/commit/168cde88b891f85db38e711ee4d380cbc0d229fa"
        },
        "date": 1675198640608,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLCompiler15",
            "value": 161.58000298692406,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLCompiler30",
            "value": 304.19054601970504,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator15",
            "value": 535361.005275,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator30",
            "value": 1044306.921875,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator30WithData10",
            "value": 10351436.85325,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLParser15",
            "value": 269.81986225941085,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLParser30",
            "value": 497.90298592480684,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameCaseWhenThen",
            "value": 77.82008370507978,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery",
            "value": 89.42523572113534,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery01",
            "value": 421.7081732522006,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery02",
            "value": 682.9168692561741,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameExceptUnionIntersectSixty",
            "value": 267.71678954859885,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameExec20Expressions",
            "value": 93.89568260655327,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameFromLet",
            "value": 75.59280446204126,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGraphPattern",
            "value": 71.17326674359744,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGraphPreFilters",
            "value": 119.67405789216431,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGroupLimit",
            "value": 81.4232905755141,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameLongFromSourceOrderBy",
            "value": 107.1056158392707,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameManyJoins",
            "value": 104.1974252605357,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameNestedAggregates",
            "value": 169.8249111347094,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameNestedParen",
            "value": 33.203758458667345,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNamePivot",
            "value": 109.86285632978692,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuery15OrsAndLikes",
            "value": 326.437112541046,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuery30Plus",
            "value": 165.39382939229716,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryFunc",
            "value": 72.52234507827475,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryFuncInProjection",
            "value": 153.90947862272853,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryList",
            "value": 118.3932920755017,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryNestedSelect",
            "value": 924.4990680955103,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuerySimple",
            "value": 31.54881163404711,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralJoins",
            "value": 41.349044711575786,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralProjections",
            "value": 107.45103256255213,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralSelect",
            "value": 302.03909098280104,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSimpleInsert",
            "value": 58.223320135597305,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeJoins",
            "value": 42.971837613947784,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeProjections",
            "value": 54.14336900076349,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeSelect",
            "value": 87.03654895338425,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameTimeZone",
            "value": 48.95141558270122,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameVeryLongQuery",
            "value": 455.3233733116318,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameVeryLongQuery01",
            "value": 1545.4045852537854,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameCaseWhenThen",
            "value": 44.65681235976129,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameComplexQuery",
            "value": 405.7487297544413,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameComplexQuery01",
            "value": 184.28069718555923,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameExceptUnionIntersectSixty",
            "value": 316.65574734200686,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameExec20Expressions",
            "value": 97.63580149865672,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameFromLet",
            "value": 65.15531623080298,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGraphPattern",
            "value": 73.27635572997698,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGraphPreFilters",
            "value": 123.26142756379897,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGroupLimit",
            "value": 73.57672216275714,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameLongFromSourceOrderBy",
            "value": 216.71246608981318,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameManyJoins",
            "value": 75.16294596925044,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameNestedAggregates",
            "value": 162.7129812806859,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameNestedParen",
            "value": 116.3634503387847,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNamePivot",
            "value": 117.25130344204442,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuery15OrsAndLikes",
            "value": 268.21327117050885,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuery30Plus",
            "value": 95.24378014883857,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryFunc",
            "value": 227.58659763173733,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryFuncInProjection",
            "value": 156.4526967120866,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryList",
            "value": 129.14721136757,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryNestedSelect",
            "value": 224.67086288725272,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuerySimple",
            "value": 24.270639261042184,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralJoins",
            "value": 113.5957004538662,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralProjections",
            "value": 90.57540578669966,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralSelect",
            "value": 166.30677182869925,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSimpleInsert",
            "value": 38.55141093552026,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeJoins",
            "value": 34.97285535971936,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeProjections",
            "value": 30.398418533697452,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeSelect",
            "value": 55.87997856108135,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameTimeZone",
            "value": 16.320419231872044,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameVeryLongQuery",
            "value": 576.2323877387719,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameVeryLongQuery01",
            "value": 1676.4129220074478,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLCompiler",
            "value": 14.101654849505351,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLEvaluator",
            "value": 3.1062649613094595,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLParser",
            "value": 21.597158550710194,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "caialan@amazon.com",
            "name": "Alan Cai",
            "username": "alancai98"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a6a719378dac7720ce21387ffeef1df6501e32e",
          "message": "[WIP] Add conformance report action (#5)",
          "timestamp": "2023-02-02T00:19:11-08:00",
          "tree_id": "8b055f9f66ab15813185c884cd63e02257d3f7ba",
          "url": "https://github.com/alancai98/partiql-lang-kotlin/commit/6a6a719378dac7720ce21387ffeef1df6501e32e"
        },
        "date": 1675329102854,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLCompiler15",
            "value": 135.91438997595765,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLCompiler30",
            "value": 260.9142934495264,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator15",
            "value": 574839.3813,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator30",
            "value": 1131019.8024999995,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator30WithData10",
            "value": 11221419.502449999,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLParser15",
            "value": 242.64270901750996,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLParser30",
            "value": 470.183054067494,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameCaseWhenThen",
            "value": 53.068335965386304,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery",
            "value": 69.7296970072322,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery01",
            "value": 360.67112068815294,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery02",
            "value": 613.3734926991115,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameExceptUnionIntersectSixty",
            "value": 244.49627517886543,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameExec20Expressions",
            "value": 77.41550804781323,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameFromLet",
            "value": 52.856080630831244,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGraphPattern",
            "value": 53.64165620127867,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGraphPreFilters",
            "value": 80.99550868209737,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGroupLimit",
            "value": 56.81741719737747,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameLongFromSourceOrderBy",
            "value": 86.5061780247617,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameManyJoins",
            "value": 74.1887829189538,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameNestedAggregates",
            "value": 125.16806390392628,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameNestedParen",
            "value": 25.014493965131273,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNamePivot",
            "value": 84.68462551874629,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuery15OrsAndLikes",
            "value": 264.7099459223618,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuery30Plus",
            "value": 144.89516511774028,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryFunc",
            "value": 57.94814956478232,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryFuncInProjection",
            "value": 125.66930690514963,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryList",
            "value": 96.09018182360255,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryNestedSelect",
            "value": 816.4502681760613,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuerySimple",
            "value": 22.74132731720938,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralJoins",
            "value": 29.923862357630384,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralProjections",
            "value": 86.83908104955987,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralSelect",
            "value": 236.89740885423652,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSimpleInsert",
            "value": 38.79246948159247,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeJoins",
            "value": 30.501680138289778,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeProjections",
            "value": 39.557615502076736,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeSelect",
            "value": 64.10450712450294,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameTimeZone",
            "value": 33.75763195919651,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameVeryLongQuery",
            "value": 399.4028818111715,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameVeryLongQuery01",
            "value": 1276.0825280270356,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameCaseWhenThen",
            "value": 35.46276262763128,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameComplexQuery",
            "value": 323.9557308506497,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameComplexQuery01",
            "value": 146.2718131002018,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameExceptUnionIntersectSixty",
            "value": 290.40479244999983,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameExec20Expressions",
            "value": 88.25886913922409,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameFromLet",
            "value": 48.656618240972705,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGraphPattern",
            "value": 55.035321672924475,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGraphPreFilters",
            "value": 91.55637391192849,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGroupLimit",
            "value": 49.25209581111047,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameLongFromSourceOrderBy",
            "value": 176.12811097243073,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameManyJoins",
            "value": 58.53692093809808,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameNestedAggregates",
            "value": 123.77085506053793,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameNestedParen",
            "value": 99.49800999090601,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNamePivot",
            "value": 85.15528141709318,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuery15OrsAndLikes",
            "value": 235.8999307847044,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuery30Plus",
            "value": 83.91268324636548,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryFunc",
            "value": 176.29863621506956,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryFuncInProjection",
            "value": 132.33261934150062,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryList",
            "value": 111.77983146710467,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryNestedSelect",
            "value": 174.24451714065694,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuerySimple",
            "value": 17.301550738182158,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralJoins",
            "value": 98.44213201978229,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralProjections",
            "value": 71.16186649645798,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralSelect",
            "value": 146.4537954658607,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSimpleInsert",
            "value": 30.75013097979242,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeJoins",
            "value": 28.694215866046612,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeProjections",
            "value": 25.316820054308906,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeSelect",
            "value": 45.185669994117546,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameTimeZone",
            "value": 12.17088478926009,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameVeryLongQuery",
            "value": 560.4241322352839,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameVeryLongQuery01",
            "value": 1594.3622241119642,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLCompiler",
            "value": 11.953304265997684,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLEvaluator",
            "value": 3.236092839125734,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLParser",
            "value": 16.787125475227064,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "caialan@amazon.com",
            "name": "Alan Cai",
            "username": "alancai98"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b87c742ed291200b1f758bc81bd95b708adb0f2",
          "message": "Testing conformance report and initial cleanup (#6)",
          "timestamp": "2023-02-03T15:39:55-08:00",
          "tree_id": "824e623b71f5e1ba735551b26f709a54814d7ab5",
          "url": "https://github.com/alancai98/partiql-lang-kotlin/commit/9b87c742ed291200b1f758bc81bd95b708adb0f2"
        },
        "date": 1675470858640,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLCompiler15",
            "value": 171.80717548077058,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLCompiler30",
            "value": 317.6403636862285,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator15",
            "value": 567924.96255,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator30",
            "value": 931342.4763249999,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator30WithData10",
            "value": 11143322.1036,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLParser15",
            "value": 295.6023344343472,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLParser30",
            "value": 530.1389449958297,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameCaseWhenThen",
            "value": 79.03556335515485,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery",
            "value": 93.86393253813654,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery01",
            "value": 462.6845072652416,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery02",
            "value": 739.4959647106128,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameExceptUnionIntersectSixty",
            "value": 289.72710978986873,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameExec20Expressions",
            "value": 99.35916521122894,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameFromLet",
            "value": 77.31707654399588,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGraphPattern",
            "value": 70.8475828282215,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGraphPreFilters",
            "value": 122.31730514780982,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGroupLimit",
            "value": 84.36958194350036,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameLongFromSourceOrderBy",
            "value": 98.83123273027492,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameManyJoins",
            "value": 110.41831826479392,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameNestedAggregates",
            "value": 168.5614138517746,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameNestedParen",
            "value": 34.032031078711064,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNamePivot",
            "value": 117.16234722391373,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuery15OrsAndLikes",
            "value": 349.3943321315681,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuery30Plus",
            "value": 168.79482222840556,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryFunc",
            "value": 78.65932603444296,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryFuncInProjection",
            "value": 158.30100125766756,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryList",
            "value": 122.58464366056387,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryNestedSelect",
            "value": 938.3051587679604,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuerySimple",
            "value": 31.019217023472095,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralJoins",
            "value": 43.89068270384736,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralProjections",
            "value": 114.21816678103764,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralSelect",
            "value": 304.9371123607875,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSimpleInsert",
            "value": 55.93814895125009,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeJoins",
            "value": 42.71030800666971,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeProjections",
            "value": 53.62376063665753,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeSelect",
            "value": 88.61879587994588,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameTimeZone",
            "value": 47.48631508134025,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameVeryLongQuery",
            "value": 475.21436002478396,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameVeryLongQuery01",
            "value": 1490.682270315,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameCaseWhenThen",
            "value": 45.33143992102855,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameComplexQuery",
            "value": 410.8053540948007,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameComplexQuery01",
            "value": 189.46775124766125,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameExceptUnionIntersectSixty",
            "value": 318.2103843945486,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameExec20Expressions",
            "value": 98.99333613177167,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameFromLet",
            "value": 66.49383018992413,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGraphPattern",
            "value": 70.563200577889,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGraphPreFilters",
            "value": 117.16071369181859,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGroupLimit",
            "value": 71.50451682285104,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameLongFromSourceOrderBy",
            "value": 219.11676715363828,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameManyJoins",
            "value": 77.26384099965445,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameNestedAggregates",
            "value": 163.2893999106851,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameNestedParen",
            "value": 127.68195427172819,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNamePivot",
            "value": 115.88095932198637,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuery15OrsAndLikes",
            "value": 265.06297985424493,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuery30Plus",
            "value": 97.7686216962633,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryFunc",
            "value": 226.3719052297694,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryFuncInProjection",
            "value": 164.39811374049017,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryList",
            "value": 131.39057236166244,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryNestedSelect",
            "value": 231.97853497375303,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuerySimple",
            "value": 24.001349140902118,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralJoins",
            "value": 116.75564880709196,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralProjections",
            "value": 89.09517137690074,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralSelect",
            "value": 176.06784525012182,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSimpleInsert",
            "value": 39.387798380771684,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeJoins",
            "value": 39.221291991492556,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeProjections",
            "value": 32.28120873676055,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeSelect",
            "value": 60.46877704068631,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameTimeZone",
            "value": 16.59216482317978,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameVeryLongQuery",
            "value": 621.0080194087085,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameVeryLongQuery01",
            "value": 1845.944506058077,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLCompiler",
            "value": 13.898050657920544,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLEvaluator",
            "value": 2.944268355019186,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLParser",
            "value": 22.636819509817105,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "107505258+yliuuuu@users.noreply.github.com",
            "name": "yliuuuu",
            "username": "yliuuuu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e5d4a637871bccb90f49596d043549e22c15a51",
          "message": "Next dev version (#972)\n\n* set next dev version",
          "timestamp": "2023-01-27T09:57:12-08:00",
          "tree_id": "76d3175d577e26d21b4d5682b498e70e9f74501e",
          "url": "https://github.com/alancai98/partiql-lang-kotlin/commit/6e5d4a637871bccb90f49596d043549e22c15a51"
        },
        "date": 1712091615189,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLCompiler15",
            "value": 77.9776426179387,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLCompiler30",
            "value": 155.90833263593504,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator15",
            "value": 292493.7614633333,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator30",
            "value": 653668.6094750001,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLEvaluator30WithData10",
            "value": 6464510.37405,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLParser15",
            "value": 150.97522486969336,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.MultipleLikeBenchmark.testPartiQLParser30",
            "value": 280.7027788317581,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameCaseWhenThen",
            "value": 32.61884360959792,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery",
            "value": 40.253931028809475,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery01",
            "value": 210.45890200032773,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameComplexQuery02",
            "value": 358.58426538858083,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameExceptUnionIntersectSixty",
            "value": 152.6784189849229,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameExec20Expressions",
            "value": 43.96000404044169,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameFromLet",
            "value": 31.717009309060195,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGraphPattern",
            "value": 29.605181921447006,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGraphPreFilters",
            "value": 51.821887060093744,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameGroupLimit",
            "value": 35.98281241064227,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameLongFromSourceOrderBy",
            "value": 45.90451329295332,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameManyJoins",
            "value": 46.686708063599674,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameNestedAggregates",
            "value": 79.40093921120746,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameNestedParen",
            "value": 13.112961708144804,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNamePivot",
            "value": 47.66498438610017,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuery15OrsAndLikes",
            "value": 152.89040505877585,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuery30Plus",
            "value": 84.71988279495389,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryFunc",
            "value": 32.93769284689704,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryFuncInProjection",
            "value": 73.40347759447428,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryList",
            "value": 59.235281593391505,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQueryNestedSelect",
            "value": 506.02100253935333,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameQuerySimple",
            "value": 11.977720530393613,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralJoins",
            "value": 16.85891552587742,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralProjections",
            "value": 53.075628433901066,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSeveralSelect",
            "value": 143.0245062307723,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSimpleInsert",
            "value": 22.85062631920507,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeJoins",
            "value": 16.291032430783588,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeProjections",
            "value": 22.368679412817663,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameSomeSelect",
            "value": 38.2614644874181,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameTimeZone",
            "value": 19.028386580941017,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameVeryLongQuery",
            "value": 219.86876226140612,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseFailNameVeryLongQuery01",
            "value": 745.4453257601556,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameCaseWhenThen",
            "value": 20.207938533371326,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameComplexQuery",
            "value": 226.35761753228158,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameComplexQuery01",
            "value": 91.46103731555512,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameExceptUnionIntersectSixty",
            "value": 172.1601802526323,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameExec20Expressions",
            "value": 55.841212625504724,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameFromLet",
            "value": 29.013166458361383,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGraphPattern",
            "value": 30.63124709997777,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGraphPreFilters",
            "value": 55.80554943374532,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameGroupLimit",
            "value": 29.09312521890003,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameLongFromSourceOrderBy",
            "value": 108.80689209136487,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameManyJoins",
            "value": 37.12246931163666,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameNestedAggregates",
            "value": 78.58721732959529,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameNestedParen",
            "value": 66.48040274669958,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNamePivot",
            "value": 54.853358461492505,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuery15OrsAndLikes",
            "value": 144.52018463036714,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuery30Plus",
            "value": 53.74148406314099,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryFunc",
            "value": 105.5739204342132,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryFuncInProjection",
            "value": 74.67279856547651,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryList",
            "value": 63.21659475406024,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQueryNestedSelect",
            "value": 111.86832164537638,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameQuerySimple",
            "value": 9.275294616666223,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralJoins",
            "value": 58.43431324030657,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralProjections",
            "value": 41.75483677088571,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSeveralSelect",
            "value": 85.08382304193465,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSimpleInsert",
            "value": 16.153912168269436,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeJoins",
            "value": 15.9158102676877,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeProjections",
            "value": 13.908255464012706,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameSomeSelect",
            "value": 26.786339584435513,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameTimeZone",
            "value": 6.146182376239933,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameVeryLongQuery",
            "value": 322.81479177311,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.ParserBenchmark.parseNameVeryLongQuery01",
            "value": 907.8712426373306,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLCompiler",
            "value": 6.454721832125401,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLEvaluator",
            "value": 1.7447321723312015,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          },
          {
            "name": "org.partiql.jmh.benchmarks.PartiQLBenchmark.testPartiQLParser",
            "value": 8.193665366602685,
            "unit": "us/op",
            "extra": "iterations: 10\nforks: 2\nthreads: 1"
          }
        ]
      }
    ]
  }
}