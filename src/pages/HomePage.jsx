import React from "react";
import "../styles/home.css";
import { Parallax } from "react-parallax";

const HomePage = () => {
  return (
    <Parallax
      bgImage="https://i.pinimg.com/736x/b4/73/75/b47375b6dad921a042f9d5ed16ee9353.jpg"
      bgImageAlt="background image"
      strength={200}
      blur={1}
    >
      <div className="slide-KHU" id="608:19">
        <div className="main-JQJ" id="608:21">
          <img
            className="vector-1-ULi"
            src="https://cdn-icons-png.flaticon.com/512/2121/2121765.png"
            id="608:22"
          />
          <img
            className="rdba905ae-f720-417b-98d1-dd360212d2f3720x-1-viW"
            src="https://assets.vogue.com/photos/5f8e0402440b37eb286a009e/master/w_2000,h_3000,c_limit/007-20201017_DZ7_2698.jpg"
            id="608:23"
          />
          <img
            className="frame-1-QNn"
            src="https://cdn-icons-png.flaticon.com/512/2121/2121765.png"
            id="608:24"
          />
          <p className="tech-vrv" id="608:27">
            Online Shop
          </p>
          <p className="item--zbt" id="608:28">
            テック
          </p>
          <p
            className="state-of-the-art-pieces-of-clothing-for-every-type-of-weather-fCE"
            id="608:29"
          >
            Online Store
          </p>
          <p className="item--ScJ" id="608:30"></p>
          <p className="spring-summer-2022-tUJ" id="608:31">
            spring
            <br />
            summer
            <br />
            2022
          </p>
          <div className="frame-2-mY6" id="608:32">
            <p className="shop-5Ht" id="608:33">
              shop
            </p>
            <p className="coats-nxz" id="608:34">
              coats
            </p>
            <p className="shoes-rxr" id="608:35">
              shoes
            </p>
            <p className="tech-9wx" id="608:36">
              tech
            </p>
          </div>
          <div className="frame-3-TSr" id="608:37">
            <p className="shop--aXU" id="608:38">
              <span className="shop--aXU-sub-0">
                shop
                <br />
              </span>
              <span className="shop--aXU-sub-1">購入</span>
            </p>
            <img
              className="feather-chevron-right-ZgE"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAeFBMVEX///8AAABcXFwSEhKAgIBTU1NISEjs7Oz5+fnGxsa1tbXn5+fz8/Ovr6/r6+vNzc2+vr7W1tYsLCydnZ2NjY3R0dEyMjLe3t5nZ2eVlZU9PT1RUVFiYmJxcXGnp6fCwsKEhIR7e3s5OTklJSUeHh4QEBApKSkaGhrMRDJPAAAKV0lEQVR4nO1d6WLyKhA17qZatca1n5q0Wt//Da+1rcaBgQEGiN6cn7Uhc5SBWaHRiIn+rnlIDs1dVCF8YZT8YRBbFH7kyQ3r2MJwY5SUkcYWhxfD5B792AKxIgPsnmtpOQB2m9gCcQJOzCSJLREnegK7XmyRGFGze1zU7B4XNbvHRc3ucVGze1zU7B4XNbvHRc3ucVGz43rVYHRDuh9P/X+Pwdi9dIQ3Jclbczb2GWIMxS6VcPtFM/VGMBC7OU7uG+0XHy8Nxu6oZpckWy+vDcNOMS+vmHl4bxh2BYFd0h2yvzcMO9l6KcGU+71h2P2jsUvGzO8Nww4mmkL9emHYjansklfW9wbaERZUdl+srw3Ebkn+8QrO14ayxDTGSglzxrcGs6KHBZHdp83o/eVUtlvS2A2nS3dL9yzBfD4fjwdn7Pf7dFZspPRGxiOPLgN9ZQJBArvh+u377x/mb9Win3Yl9AwHeb0tWbAeRc9ucv3kzYclPxV/wL3RAHcMcsVnMnaZ4jMezKAEHaPHvxTP6tg17z6z0ngtBA/CZEvfgWc/y/Kr2Q3hLuzDTXGrCDoJBErGqpLdVPiwxcZIJeIH/ckXQcTyoqtiJ/M5l5ykrpiAt9A9vb1Expu9o2CXS57zVQN4sH2L3Ov/W1twdk3JUzZbLQlg3dySHxxIpUxOP5sXxm74KX9s4oUctLLpa/OrXMzftQVhJ64nv/AUmmuAPZ2+J8itueRn4ZWzG0n++wKD1cwM6/v30BVPuqxcUMjYvSLryQWeJqbgIdEVD1kfvtHti/WZPUUEy8xGMkH//kVHg0dlhvgPPkUFm76h/+2z7hZ8pV0Z2vJHC1RgEyDTJdtIRTnjfbsjLw+CLS0D8iy0NW2A2ZjqpzIiO1LkBYt30uMaGLA+E93IXSI9igzoYvOKbM9EHNGNrtA9mtPYbSli4PEPfOnUA18s+/qHabqH7rFlKHwjcrxbALJYfYOg0TR3TebLiFAMAB0NKlSmM+Fx4tZMUh1VGxY9JFyGKnVBWcibNHYFSRiVodtHjU4UC5UriZroZRCD57SZpV6CSUtTCSvlaLgVVAIxTCIahVKoWwTNNnb1WGv9AAk9WvFBE0mdwqQn03SBU8QxhiCSI6/p6m+LvLGf1L4qcY0iOxbkr10zGWhZ+q46M0JdgMkxUGgYdDtyvHc1EQLKJFBs4d/odd+Rt4PSG3ouHKxRZvmEMvT1MfbRLzAQ/UHryJgA3byyrz4A6mPgzwNX+mAtwnl7US3AXw61B2CbMEk9ACmcAnD4xk60neQA2mMyCUDVjltoGDMSqf60HGAwk5Q08IL+OcmBbMduYT2gdu8mz0IvyEmQ83Bi+ss1zeOgdkKqy7Wwqv8OuGm2cD2A2pmVn4ClwD0Z2r4bz2GP+QE0OMyeBtuw0bSWo6zK7qc8zJ3kg4F/hnrwlz+XdsGQWXVSO1jBwHOczTTrbDoZS+0n0GPTqi+QoHHbm/jhOLXAHvXmRUZruKmdGH6oVlcSMH/Ml3QQ1vKWMLSCo9oJqxJrMaor3Ha7b4Cp7ad2yxLAQ7PZjcH346sMwQZA7WyOJwPJHE8FMlYA4SibGmcQb1VHi8MCTCsbQwqGRNhltAZQO2ra9R7WITXfYFC7RmN1P4ifklAbMKidEH5g8IKYwKIyMGtWlZMFWdROCD9wt63ZgkXthCRsVbwgsBHbfukgCbtgldEeTAoDvSD+flgbMKmdkISthhfEpHZC/k3nBS3TVGFrD/epameapxOah8ykdkI4W91POb7Uw2+QgFf/xzbAYn0/EcYmZe4DdSE8QRxJ5QVdvwl51uovxiafSH8We0u/RADz117tBA9f5QVdrVJpSuWmLNK2wuun+l0HuC4uR08DDVZ4QaW8iuzjW8pMtjTdAnD6qmGQfHMxMWA9M/6fGnY3w1dWJX9jp99TgURO5iEYC4+Rh2LHqHbCPMC9oFDsGNVOGAyvLAjFjlHtxCQsOs1DsQMBAwMqMgB2qLURiB1QO9fGDJCERfejQOyAprg6ZSAJi3ZXBWIHYj2uaUWYhMUsQQ27m+nrxg5I4xwMAd1IaEXc9T+kunBLdsq2zFsER1MuwKx2QhIWLTi8Gm3S2XKdAvI95ardmpQ6s9oZJGHX+Mw7Y9m6fIpZqr/0dKFJZrUTc2V4WV5vl2cjXBMmWXuG/zTLWZ7pGzVb97Jo/18PUNUT8zoYYFtwtCGCJGzMXBCIjnOEIGHnG8OQtgCmBUcRDVQ8P2cwkAAkYYlAgpRLvKt8PKidgRfkGx7UrkJJWA9q16B7Qb4BDhBhyrgBCyHW/W5e1E6Y797OmDATgyvhBsMPkXJBftRO6IS17wtygq/vuLgfN+ca1wggjc931gVIwrb+NSMAWPN8eW5iJ2xQMF48SuyEDQnG+hL70w18gXNbMmlADgPO8hLCERmBwXrfL6lbPyRYLQrSeUABwWsNoqe2RQJzVVdsOgDM12xTz68PBF5yLIdp8YG7ztfuvBtPcOwylkDSmBsLHrp2gO94PLVi4HjqZj66WkAStiqlqEyANeBV6gtiAIi3Pdft8jAJW532BBbA0xqqUSXNBegFxUxTegDIBTmdjlI9wMMZn2tqwshYdZq6WAAc9FNseXgBp2Y1ui+4AKfmk1lj8Eza59oUhLPYYwvEC8iuSm3a7hDO6XyqXUGMST8VPfFOg3/VOnnFCbJM3mpQlW5mZ8hzXd1sN1j2Hp+kLht0+jx8egyfLdp+i/Ao1/16hd9TelwO0WeBW9+WBvFLBLyWcsUPunv1m22vCGCD31OIYq8suVd2sWsgfBvvr+QrjX0g98yOeqy/HwQIebyu9GJ4gn9yZyxNb7BgQqhoVT+NYLkEdSmno3bISqQWczEHBcPldDKazdZZsV2tVtui7QnrCNxq1KhRo0aN/wPG6+1msegWM5bzUXuTrLlZfHTy1OHKGS4si7KhlLlKNCmf8rWJfNLxC7yTI9m6hKTTIxwuJj9prbu1hzKU3Uu2iZaGQW5Jy+1Gw0KJkRptUc/HKhqOdwVEOVNWUDmnX08VBI5wVjV++3pio3vKqw6DJ8807SWm8rSVozlfIGQKTcehoer5uyjPCtpkgtm2rutV8ZrWEqG9jteoEUl/G2/Qg0/0d023TIbTd8AFPYubcE+4ybetv5g5aMkdIcxuUNNP6TwNWcpLyAFpbnItg5LODWmPEcQxOERHKB6UIGS5JEEcA02hJHNDukIEcQxuJqOwC9maQxDHYAOmXPIdcmYSTn4wsA0pq0rI/AhhRzAomqHsCCFDSIQuXxOfU7/BBO1+0FtiRtltfY1B2CvqtLaTkTh6xQsbXNEu4mYemSKKcUHo+/cOanEMj/uD51hChO7K0VhPpl2/avc1sPPaUF3LnliUXag3hQgR2zdcGouzClRRqBjdYsMWJo3VRMLXqTjd30Pk17NsicU0OVqiRKp71nXLyy/JaK2IlyYOhNmJ3XdEgtjMkTMJaon0zl3oOGY0+vf88viN0S+7ontIjl+dPOVYuefr7UcraX2s1mbf1H/65YGkA6h73gAAAABJRU5ErkJggg=="
              id="608:39"
            />
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default HomePage;
