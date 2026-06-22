import os
from pathlib import Path

# CHANGE THIS to your image folder
IMAGE_FOLDER = r"C:\Users\Rizal\Downloads\Products"

mapping = {
    'ADIDAS CLUB CLIMACOOL CYAN BLUE SKIRT': 'adidas-club-climacool-cyan-blue-skirt.jpg',
    'ADIDAS COURTJAM CONTROL 3 CLAY WHITE ORANGE BLACK': 'adidas-courtjam-control-3-clay-white-orange-black.jpg',
    'ADIDAS CRAZYQUICK LS WHITE BLUE GREY SHOES': 'adidas-crazyquick-ls-white-blue-grey-shoes.jpg',
    'ADIDAS CROSS IT LIGHT 2026 – MARTITA ORTEGA': 'adidas-cross-it-light-2026-martita-ortega.jpg',
    'ADIDAS DROP SHOT MEN SHOES': 'adidas-drop-shot-men-shoes.jpg',
    'ADIDAS METALBONE CTRL 2026': 'adidas-metalbone-ctrl-2026.jpg',
    'ADIDAS METALBONE HRD+ 2026 – ALE GALÁN': 'adidas-metalbone-hrd-plus-2026-ale-galan.jpg',
    'ADIDAS WHITE T-SHIRT BY. ALE GALAN': 'adidas-white-t-shirt-by-ale-galan.jpg',
    'ASICS GEL CHALLENGER 15 CLAY GREEN STEEL GREY SHOES': 'asics-gel-challenger-15-clay-green-steel-grey-shoes.jpg',
    'ASICS GEL RESOLUTION X CLAY GREY GREEN PISTACHIO SHOES': 'asics-gel-resolution-x-clay-grey-green-pistachio-shoes.jpg',
    'ASICS SONICMASH FF BLUE GREEN SHOES': 'asics-sonicmash-ff-blue-green-shoes.jpg',
    'Adidas Arrow Hit Pro EDT 2026': 'adidas-arrow-hit-pro-edt-2026.jpg',
    'Adidas Metalbone 3.5 2026 Ale Galán': 'adidas-metalbone-3-5-2026-ale-galan.jpg',
    'BABOLAT JET PREMURA 3 WHITE ORANGE BY. JUAN LEBRON SHOES': 'babolat-jet-premura-3-white-orange-by-juan-lebron-shoes.jpg',
    'BABOLAT JET VIVA BLUE SHOES': 'babolat-jet-viva-blue-shoes.jpg',
    'BABOLAT PREMURA 3 BLACK GOLD MEN SHOES': 'babolat-premura-3-black-gold-men-shoes.jpg',
    'BABOLAT PREMURA 3 BLUE PETROLEO MEN SHOES': 'babolat-premura-3-blue-petroleo-men-shoes.jpg',
    'BABOLAT RH PRO MULTICOLOR BY. JUAN LEBRON': 'babolat-rh-pro-multicolor-by-juan-lebron.jpg',
    'BABOLAT RH PRO ORANGE PADEL BAG BY. JUAN LEBRON': 'babolat-rh-pro-orange-padel-bag-by-juan-lebron.jpg',
    'BULLPADEL AZABAL OFFICIAL T-SHIRT GRAPEFRUIT': 'bullpadel-azabal-official-t-shirt-grapefruit.jpg',
    'BULLPADEL CASUAL BLACK PADEL BAG': 'bullpadel-casual-black-padel-bag.jpg',
    'BULLPADEL VERTEX 05 GEO BLACK PREMIER PADEL BAG 2026': 'bullpadel-vertex-05-geo-black-premier-padel-bag-2026.jpg',
    'BULLPADEL VERTEX WOMAN PREMIER WHITE 2026 PADEL BAG': 'bullpadel-vertex-woman-premier-white-2026-padel-bag.jpg',
    'Babolat Veron Juan Lebrón 3.0': 'babolat-veron-juan-lebron-3-0.jpg',
    'Babolat Viper Juan Lebron 3.0 FW': 'babolat-viper-juan-lebron-3-0-fw.jpg',
    'Babolat Viper Juan Lebrón 3.0': 'babolat-viper-juan-lebron-3-0.jpg',
    'Babolat Viper Soft Juan Lebrón 3.0': 'babolat-viper-soft-juan-lebron-3-0.jpg',
    'MUNICH TOLITO ATOMIK 52 WHITE BLUE SNEAKERS': 'munich-tolito-atomik-52-white-blue-sneakers.jpg',
    'NIKE ZOOM VOMERO 5 SE MEN SHOES': 'nike-zoom-vomero-5-se-men-shoes.jpg',
    'NOX AT10 Genius 12K Xtrem 2026 A. Tapia': 'nox-at10-genius-12k-xtrem-2026-a-tapia.jpg',
    'NOX AT10 Genius 18K Agustín Tapia 2024': 'nox-at10-genius-18k-agustin-tapia-2024.jpg',
    'NOX AT10 Genius 18K Alum 2025 Agustin Tapia': 'nox-at10-genius-18k-alum-2025-agustin-tapia.jpg',
    'Nike Air Max Invigor White Original': 'nike-air-max-invigor-white-original.jpg',
    'Nike Journey Run Purple Original': 'nike-journey-run-purple-original.jpg',
    'Oxdog Hyper Pro 2.0': 'oxdog-hyper-pro-2-0.jpg',
    'Oxdog Ultimate Pro + 2026': 'oxdog-ultimate-pro-plus-2026.jpg',
    'Oxdog Ultimate Pro Light 2026': 'oxdog-ultimate-pro-light-2026.jpg',
    'ROYAL PADEL M27 LIGHT 2026': 'royal-padel-m27-light-2026.jpg',
    'SIUX FENIX BLACK ORANGE T-SHIRT BY. LEO AUGSBURGER': 'siux-fenix-black-orange-t-shirt-by-leo-augsburger.jpg',
    'Siux Electra Pro Fire Red 2026': 'siux-electra-pro-fire-red-2026.jpg',
    'Siux Electra ST5 Pro Shadow Red 2026 Franco Stupaczuk': 'siux-electra-st5-pro-shadow-red-2026-franco-stupaczuk.jpg',
    'Siux Fenix Pro Glow Purple 2026 Leo Augsburger': 'siux-fenix-pro-glow-purple-2026-leo-augsburger.jpg',
    'Siux Padel Racket Electra Pro ST4 2025 F. Stupaczuk': 'siux-padel-racket-electra-pro-st4-2025-f-stupaczuk.jpg',
    'T-SHIRT BABOLAT PINK BY. JUAN LEBRON': 't-shirt-babolat-pink-by-juan-lebron.jpg',
    'T-SHIRT NOX SPONSOR AT10 WHITE': 't-shirt-nox-sponsor-at10-white.jpg',
    'WILSON COURTGLIDE WHITE GREY WOMAN SHOES': 'wilson-courtglide-white-grey-woman-shoes.jpg',

}

folder = Path(IMAGE_FOLDER)

renamed = 0
missing = []

for old_name, new_name in mapping.items():
    old_file = folder / f"{old_name}.jpeg"

    if old_file.exists():
        new_file = folder / new_name
        old_file.rename(new_file)
        print(f"RENAMED: {old_file.name} -> {new_file.name}")
        renamed += 1
    else:
        missing.append(old_file.name)

print(f"\nDone. Renamed {renamed} files.")

if missing:
    print("\nMissing files:")
    for item in missing:
        print("-", item)
