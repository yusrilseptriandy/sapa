import HomeLayout from "../Layouts/HomeLayout";
import Button from "../Elements/Button";
import { Icon } from "@iconify/react";

const HomePage = () => {
  return (
    <HomeLayout>
      <div className="card-main-content w-full h-max">
        <div className="header-card-content flex justify-between items-center w-full h-14 border-b px-3 py-2">
          <div className="img-profile flex items-center cursor-pointer">
            <img
              src="../public/pf.jpg"
              alt="profile"
              width={35}
              className="rounded-full"
            />
            <span className="ml-3 font-bold">yusrilsptr</span>
            <Icon
              icon="ic:round-verified"
              color="#006fa8"
              width="20"
              height="20"
            />
          </div>

          <div className="more-options cursor-pointer">
            <Icon
              icon="tabler:dots-vertical"
              width="25"
              height="25"
              className="text-slate-800"
            />
          </div>
        </div>

        <div className="feed-card-content">
          <div className="flex justify-center">
            <img src="../public/test.jpg" alt="" />
          </div>
        </div>

        <div className="footer-card-content flex flex-col h-min py-2 px-3 w-full">
          <div className="flex items-center gap-3 w-max">
            <div className="love cursor-pointer flex items-center">
              <Button type="submit">
                <Icon
                  icon="tabler:heart-filled"
                  color="#eb0202"
                  width="30"
                  height="30"
                />
              </Button>
            </div>
            <div className="comment cursor-pointer flex items-center">
              <Button type="submit">
                <Icon icon="tabler:message-circle" width="30" height="30" />
              </Button>
            </div>
            <div className="share cursor-pointer flex items-center">
              <Button type="submit">
                <Icon icon="tabler:share-3" width="30" height="30" />
              </Button>
            </div>
            <div className="save cursor-pointer flex items-center">
              <Button type="submit">
                <Icon icon="tabler:bookmark" width="30" height="30" />
              </Button>
            </div>
          </div>

          <div className="count-heart my-3 flex flex-col">
            <div className="reaction flex gap-2">
              <span className="font-semibold">10.902</span>
              <span className="font-semibold">Likes</span>
            </div>

            <div className="card-footer flex flex-col">
              <div>
                <span className="font-bold cursor-pointer">yusrilsptr</span>
              </div>

              <div className="card-footer-title">
                <h3 className="line-clamp-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores doloribus nemo nobis sequi nihil, minus aperiam
                  accusantium sed quia temporibus! Minima ea totam temporibus
                  cumque deserunt, a sunt soluta quae doloremque laudantium
                  dicta voluptatem quo consequuntur architecto, expedita magni
                  porro rem amet sit nisi? Odit velit reprehenderit autem
                  inventore molestiae exercitationem quod voluptatum doloremque
                  pariatur sit. Tenetur in pariatur modi hic. Cumque quaerat
                  vitae beatae deserunt ad excepturi laudantium obcaecati
                  praesentium natus? Dignissimos iure qui nulla vel minus. Ad,
                  voluptate.
                </h3>
                <Button
                  type="button"
                  className="text-[#006fa8] text-sm font-bold italic whitespace-nowrap"
                >
                  show more
                </Button>
              </div>

              <div className="card-footer-comments">
                <Button type="button" className="font-semibold text-sm">
                  See all 1.124 comments
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-main-content w-full h-max">
        <div className="header-card-content flex justify-between items-center w-full h-14 border-b px-3 py-2">
          <div className="img-profile flex items-center cursor-pointer">
            <img
              src="../public/pf.jpg"
              alt="profile"
              width={35}
              className="rounded-full"
            />
            <span className="ml-3 font-bold">yusrilsptr</span>
            <Icon
              icon="ic:round-verified"
              color="#006fa8"
              width="20"
              height="20"
            />
          </div>

          <div className="more-options cursor-pointer">
            <Icon
              icon="tabler:dots-vertical"
              width="25"
              height="25"
              className="text-slate-800"
            />
          </div>
        </div>

        <div className="feed-card-content">
          <div className="flex justify-center">
            <img src="../public/test.jpg" alt="" />
          </div>
        </div>

        <div className="footer-card-content flex flex-col h-min py-2 px-3 w-full">
          <div className="flex items-center gap-3 w-max">
            <div className="love cursor-pointer flex items-center">
              <Button type="submit">
                <Icon
                  icon="tabler:heart-filled"
                  color="#eb0202"
                  width="30"
                  height="30"
                />
              </Button>
            </div>
            <div className="comment cursor-pointer flex items-center">
              <Button type="submit">
                <Icon icon="tabler:message-circle" width="30" height="30" />
              </Button>
            </div>
            <div className="share cursor-pointer flex items-center">
              <Button type="submit">
                <Icon icon="tabler:share-3" width="30" height="30" />
              </Button>
            </div>
            <div className="save cursor-pointer flex items-center">
              <Button type="submit">
                <Icon icon="tabler:bookmark" width="30" height="30" />
              </Button>
            </div>
          </div>

          <div className="count-heart my-3 flex flex-col">
            <div className="reaction flex gap-2">
              <span className="font-semibold">10.902</span>
              <span className="font-semibold">Likes</span>
            </div>

            <div className="card-footer flex flex-col">
              <div>
                <span className="font-bold cursor-pointer">yusrilsptr</span>
              </div>

              <div className="card-footer-title">
                <h3 className="line-clamp-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores doloribus nemo nobis sequi nihil, minus aperiam
                  accusantium sed quia temporibus! Minima ea totam temporibus
                  cumque deserunt, a sunt soluta quae doloremque laudantium
                  dicta voluptatem quo consequuntur architecto, expedita magni
                  porro rem amet sit nisi? Odit velit reprehenderit autem
                  inventore molestiae exercitationem quod voluptatum doloremque
                  pariatur sit. Tenetur in pariatur modi hic. Cumque quaerat
                  vitae beatae deserunt ad excepturi laudantium obcaecati
                  praesentium natus? Dignissimos iure qui nulla vel minus. Ad,
                  voluptate.
                </h3>
                <Button
                  type="button"
                  className="text-[#006fa8] text-sm font-bold italic whitespace-nowrap"
                >
                  show more
                </Button>
              </div>

              <div className="card-footer-comments">
                <Button type="button" className="font-semibold text-sm">
                  See all 1.124 comments
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-main-content w-full h-max">
        <div className="header-card-content flex justify-between items-center w-full h-14 border-b px-3 py-2">
          <div className="img-profile flex items-center cursor-pointer">
            <img
              src="../public/pf.jpg"
              alt="profile"
              width={35}
              className="rounded-full"
            />
            <span className="ml-3 font-bold">yusrilsptr</span>
            <Icon
              icon="ic:round-verified"
              color="#006fa8"
              width="20"
              height="20"
            />
          </div>

          <div className="more-options cursor-pointer">
            <Icon
              icon="tabler:dots-vertical"
              width="25"
              height="25"
              className="text-slate-800"
            />
          </div>
        </div>

        <div className="feed-card-content">
          <div className="flex justify-center">
            <img src="../public/test.jpg" alt="" />
          </div>
        </div>

        <div className="footer-card-content flex flex-col h-min py-2 px-3 w-full">
          <div className="flex items-center gap-3 w-max">
            <div className="love cursor-pointer flex items-center">
              <Button type="submit">
                <Icon
                  icon="tabler:heart-filled"
                  color="#eb0202"
                  width="30"
                  height="30"
                />
              </Button>
            </div>
            <div className="comment cursor-pointer flex items-center">
              <Button type="submit">
                <Icon icon="tabler:message-circle" width="30" height="30" />
              </Button>
            </div>
            <div className="share cursor-pointer flex items-center">
              <Button type="submit">
                <Icon icon="tabler:share-3" width="30" height="30" />
              </Button>
            </div>
            <div className="save cursor-pointer flex items-center">
              <Button type="submit">
                <Icon icon="tabler:bookmark" width="30" height="30" />
              </Button>
            </div>
          </div>

          <div className="count-heart my-3 flex flex-col">
            <div className="reaction flex gap-2">
              <span className="font-semibold">10.902</span>
              <span className="font-semibold">Likes</span>
            </div>

            <div className="card-footer flex flex-col">
              <div>
                <span className="font-bold cursor-pointer">yusrilsptr</span>
              </div>

              <div className="card-footer-title">
                <h3 className="line-clamp-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores doloribus nemo nobis sequi nihil, minus aperiam
                  accusantium sed quia temporibus! Minima ea totam temporibus
                  cumque deserunt, a sunt soluta quae doloremque laudantium
                  dicta voluptatem quo consequuntur architecto, expedita magni
                  porro rem amet sit nisi? Odit velit reprehenderit autem
                  inventore molestiae exercitationem quod voluptatum doloremque
                  pariatur sit. Tenetur in pariatur modi hic. Cumque quaerat
                  vitae beatae deserunt ad excepturi laudantium obcaecati
                  praesentium natus? Dignissimos iure qui nulla vel minus. Ad,
                  voluptate.
                </h3>
                <Button
                  type="button"
                  className="text-[#006fa8] text-sm font-bold italic whitespace-nowrap"
                >
                  show more
                </Button>
              </div>

              <div className="card-footer-comments">
                <Button type="button" className="font-semibold text-sm">
                  See all 1.124 comments
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default HomePage;
