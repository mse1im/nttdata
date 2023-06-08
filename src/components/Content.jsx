import pic from "./pic.png";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Content() {
  return (
    <div className="container">
        <div className="flex justify-between items-center">
            <h2 className="font-medium md:text-2xl text-base text-neutral-950">Content title goes here</h2>
            <div className="flex items-center">
                <div className="like mr-4">
                    <span>0 ÜRÜN</span>
                </div>
                <button className="bg-[#0059BC] text-white rounded py-1 px-2">Beğenilenler</button>
            </div>
        </div>
        <div className="flex flex-col mt-[32px]">
            <div className="products flex gap-3 flex-shrink">
                <div className="product cursor-pointer flex flex-col border justify-between border-solid border-[#E6E6E6] rounded-[4px] p-[10px] text-[#00254F]">
                    <figure className="relative">
                        <img className="rounded-t-[3px] w-full" src={pic} alt="" />
                        <figcaption className="absolute top-[11px] right-[11px] p-2 rounded-full bg-white flex items-center justify-center">
                            <span className="text-[#D1D1D1]">heart icon</span>
                        </figcaption>
                    </figure>
                    <h3 className="font-semibold text-base">Product Name</h3>
                    <div className="price bg-[#E6EEF8] py-1 px-2 my-1">
                        <span className="font-bold text-sm">1.299,00 TL</span>
                    </div>
                    <div className="description">
                        <span className="text-xs font-medium">Description</span>
                        <p className="text-xs font-normal">Lorem ipsum dolor sit amet consectetur. Turpis dolor vulputate velit id sit leo aliquet id at. Vel tellus tempus lacus tristique nulla pretium erat duis.</p>
                    </div>
                    <span className="delivery text-[10px] font-normal">Ücretsiz - Aynı gün kargo</span>
                </div>
                <div className="product cursor-pointer flex flex-col border justify-between border-solid border-[#E6E6E6] rounded-[4px] p-[10px] text-[#00254F]">
                    <figure className="relative">
                        <img className="rounded-t-[3px] w-full" src={pic} alt="" />
                        <figcaption className="absolute top-[11px] right-[11px] p-2 rounded-full bg-white flex items-center justify-center">
                            <span className="text-[#D1D1D1]">heart icon</span>
                        </figcaption>
                    </figure>
                    <h3 className="font-semibold text-base">Product Name</h3>
                    <div className="price bg-[#E6EEF8] py-1 px-2 my-1">
                        <span className="font-bold text-sm">1.299,00 TL</span>
                    </div>
                    <div className="description">
                        <span className="text-xs font-medium">Description</span>
                        <p className="text-xs font-normal">Lorem ipsum dolor sit amet consectetur. Turpis dolor vulputate velit id sit leo aliquet id at. Vel tellus tempus lacus tristique nulla pretium erat duis.</p>
                    </div>
                    <span className="delivery text-[10px] font-normal">Ücretsiz - Aynı gün kargo</span>
                </div>
                <div className="product cursor-pointer flex flex-col border justify-between border-solid border-[#E6E6E6] rounded-[4px] p-[10px] text-[#00254F]">
                    <figure className="relative">
                        <img className="rounded-t-[3px] w-full" src={pic} alt="" />
                        <figcaption className="absolute top-[11px] right-[11px] p-2 rounded-full bg-white flex items-center justify-center">
                            <span className="text-[#D1D1D1]">heart icon</span>
                        </figcaption>
                    </figure>
                    <h3 className="font-semibold text-base">Product Name</h3>
                    <div className="price bg-[#E6EEF8] py-1 px-2 my-1">
                        <span className="font-bold text-sm">1.299,00 TL</span>
                    </div>
                    <div className="description">
                        <span className="text-xs font-medium">Description</span>
                        <p className="text-xs font-normal">Lorem ipsum dolor sit amet consectetur. Turpis dolor vulputate velit id sit leo aliquet id at. Vel tellus tempus lacus tristique nulla pretium erat duis.</p>
                    </div>
                    <span className="delivery text-[10px] font-normal">Ücretsiz - Aynı gün kargo</span>
                </div>
                <div className="product cursor-pointer flex flex-col border justify-between border-solid border-[#E6E6E6] rounded-[4px] p-[10px] text-[#00254F]">
                    <figure className="relative">
                        <img className="rounded-t-[3px] w-full" src={pic} alt="" />
                        <figcaption className="absolute top-[11px] right-[11px] p-2 rounded-full bg-white flex items-center justify-center">
                            <span className="text-[#D1D1D1]">heart icon</span>
                        </figcaption>
                    </figure>
                    <h3 className="font-semibold text-base">Product Name</h3>
                    <div className="price bg-[#E6EEF8] py-1 px-2 my-1">
                        <span className="font-bold text-sm">1.299,00 TL</span>
                    </div>
                    <div className="description">
                        <span className="text-xs font-medium">Description</span>
                        <p className="text-xs font-normal">Lorem ipsum dolor sit amet consectetur. Turpis dolor vulputate velit id sit leo aliquet id at. Vel tellus tempus lacus tristique nulla pretium erat duis.</p>
                    </div>
                    <span className="delivery text-[10px] font-normal">Ücretsiz - Aynı gün kargo</span>
                </div>
            </div>
            <Stack spacing={2} direction="row">
                <Button variant="contained">Daha fazla</Button>
            </Stack>
        </div>
    </div>
  )
}

export default Content;