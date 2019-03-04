var config =
{
    "sites":
    [
        { "url": "https://boards.4chan.org/tv/#catalog",                        "text": "/tv/" },
        { "url": "https://boards.4chan.org/lit/#catalog",                       "text": "/lit/"  },
        { "url": "https://boards.4chan.org/fit/#catalog",                       "text": "/fit/" },
        { "url": "https://boards.4chan.org/wg/#catalog",                        "text": "/wg/"  },
        { "url": "https://www.reddit.com/r/worldnews",                          "text": "r/wn"  },
        { "url": "https://www.reddit.com/r/europe",                             "text": "r/eu"   },
        { "url": "https://www.youtube.com/",                                    "text": "yt" },
        { "url": "https://www.facebook.com/",                                   "text": "fb" },
        { "url": "https://www.last.fm/user/Dafiruz",                            "text": "α.fm"   },
        { "url": "https://www.goodreads.com/",                                  "text": "gr" },
        { "url": "https://letterboxd.com/",                                     "text": "lb" },
        { "url": "https://www.albumoftheyear.org/",                             "text": "aoty"  },
    ]
}, d = document;

d.addEventListener("DOMContentLoaded", function()
{
    d.removeEventListener("DOMContentLoaded", arguments.callee, false);

    for (var i = 0, MAX = config.sites.length; i < MAX; ++i)
    {
        var p = i / 12,
            site = d.createElement("a");
        site.href = config.sites[i].url;
        site.textContent = config.sites[i].text;

        if (i % 12 === 0)
        {
            var page = d.createElement("div");
            page.id = "page" + p;

            d.querySelector("#sites").appendChild(page);
            // d.querySelector("#navigation ul").appendChild((d.createElement("li")));

            if (p === 0)
            {
                // d.querySelector("#navigation ul li").classList.add("selected");
                d.querySelector("#sites > div").classList.add("selected");
            }
        }

        d.querySelector("#page" + Math.floor(p)).appendChild(site);
    }
});
