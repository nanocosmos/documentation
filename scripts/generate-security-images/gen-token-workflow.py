from PIL import Image, ImageDraw, ImageFont

# === CONFIG ===
WIDTH  = 880
HEIGHT = 445
SCALE  = 4  # supersampling — all coords in display px, fonts too

# colours
ORANGE       = (232, 119, 34)
ORANGE_TINT  = (255, 220, 190)
WHITE        = (255, 255, 255)
DARK         = ( 28,  28,  28)
MID          = ( 90,  90,  90)
BORDER_GRAY  = (210, 210, 210)
BOX_BG       = (250, 250, 250)
STEP_BG      = (255, 242, 228)
SHADOW       = (215, 215, 215)

FONT_REGULAR = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FONT_BOLD    = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"

def p(v):
    """Convert display pixels to hi-res canvas pixels."""
    return int(v * SCALE)

def get_font(display_size, bold=False):
    """Font size in display pixels; scaled up for hi-res canvas."""
    try:
        return ImageFont.truetype(FONT_BOLD if bold else FONT_REGULAR, p(display_size))
    except:
        return ImageFont.load_default()


def draw_box(draw, x1, y1, x2, y2, line1, line2=None, line3=None):
    r = p(10)
    draw.rounded_rectangle([x1+p(4), y1+p(4), x2+p(4), y2+p(4)], radius=r, fill=SHADOW)
    draw.rounded_rectangle([x1, y1, x2, y2], radius=r, fill=BOX_BG, outline=BORDER_GRAY, width=p(2))
    draw.rounded_rectangle([x1, y1, x2, y1+p(7)], radius=r, fill=ORANGE)
    draw.rectangle([x1, y1+p(4), x2, y1+p(7)], fill=ORANGE)

    cx = (x1 + x2) // 2
    lines  = [l for l in [line1, line2, line3] if l]
    fonts  = [get_font(17, bold=True), get_font(13), get_font(12)]
    colors = [DARK, MID, ORANGE]
    gap    = p(20)
    total  = (len(lines) - 1) * gap
    sy     = (y1 + y2) // 2 - total // 2 + p(4)
    for i, (line, font, color) in enumerate(zip(lines, fonts, colors)):
        draw.text((cx, sy + i * gap), line, font=font, fill=color, anchor="mm")


def pill(draw, mx, my, text, above=True):
    f  = get_font(13)
    ty = my - p(16) if above else my + p(16)
    bb = draw.textbbox((mx, ty), text, font=f, anchor="mm")
    pad = p(7)
    draw.rounded_rectangle([bb[0]-pad, bb[1]-p(4), bb[2]+pad, bb[3]+p(4)],
                            radius=p(5), fill=STEP_BG, outline=ORANGE_TINT, width=p(1))
    draw.text((mx, ty), text, font=f, fill=DARK, anchor="mm")


def arrow_h(draw, x1, x2, y, label, forward=True, dashed=False, above=True):
    color = ORANGE if forward else MID
    lw = p(2); hd = p(10)
    if dashed:
        seg = p(10); gap = p(6); sx = x1
        while (sx < x2 if x2 > x1 else sx > x2):
            ex = min(sx+seg, x2) if x2 > x1 else max(sx-seg, x2)
            draw.line([(sx, y), (ex, y)], fill=color, width=lw)
            sx += (seg+gap) if x2 > x1 else -(seg+gap)
    else:
        draw.line([(x1, y), (x2, y)], fill=color, width=lw)
    if x2 > x1:
        draw.polygon([(x2,y),(x2-hd,y-p(6)),(x2-hd,y+p(6))], fill=color)
    else:
        draw.polygon([(x2,y),(x2+hd,y-p(6)),(x2+hd,y+p(6))], fill=color)
    if label:
        pill(draw, (x1+x2)//2, y, label, above=above)


def arrow_v(draw, x, y1, y2, label=None, label_right=True, dashed=False):
    color = MID if dashed else ORANGE
    lw = p(2); hd = p(10)
    if dashed:
        seg = p(10); gap = p(6); sy = y1
        while sy < y2:
            ey = min(sy + seg, y2)
            draw.line([(x, sy), (x, ey)], fill=color, width=lw)
            sy += seg + gap
    else:
        draw.line([(x, y1), (x, y2)], fill=color, width=lw)
    draw.polygon([(x,y2),(x-p(6),y2-hd),(x+p(6),y2-hd)], fill=color)
    if label:
        f  = get_font(13)
        mid_y = (y1 + y2) // 2
        lx = x + p(10)
        bb = draw.textbbox((lx, mid_y), label, font=f, anchor="lm")
        pad = p(7)
        draw.rounded_rectangle([bb[0]-pad, bb[1]-p(4), bb[2]+pad, bb[3]+p(4)],
                                radius=p(5), fill=STEP_BG, outline=ORANGE_TINT, width=p(1))
        draw.text((lx, mid_y), label, font=f, fill=DARK, anchor="lm")


def render():
    W = p(WIDTH)
    H = p(HEIGHT)
    img  = Image.new("RGB", (W, H), WHITE)
    draw = ImageDraw.Draw(img)

    # ── layout in display pixels, converted via p() ──
    BW   = p(190)   # box width
    BH   = p(130)   # box height
    GAP  = p(120)   # gap between boxes (for arrows + labels)
    EGAP = p(10)    # gap between box edge and arrow tip

    R1Y  = p(80)    # row 1 top
    V_X1 = p(30)
    B_X1 = V_X1 + BW + GAP
    T_X1 = B_X1 + BW + GAP

    R2Y  = p(290)   # row 2 top
    P_X1 = V_X1

    V_X2 = V_X1 + BW;  V_CX = V_X1 + BW//2
    B_X2 = B_X1 + BW
    T_X2 = T_X1 + BW
    P_X2 = P_X1 + BW

    FWD_Y  = R1Y + BH * 2 // 5
    BACK_Y = R1Y + BH * 3 // 5

    # ── boxes ──
    draw_box(draw, V_X1, R1Y, V_X2, R1Y+BH, "Viewer", "(Browser)")
    draw_box(draw, B_X1, R1Y, B_X2, R1Y+BH,
             "Your Backend", "2. Collect context", "IP · Domain · User ID")
    draw_box(draw, T_X1, R1Y, T_X2, R1Y+BH, "nanoStream", "Token Service API")
    draw_box(draw, P_X1, R2Y, P_X2, R2Y+BH, "nanoStream", "H5Live Player")

    # ── arrows ──
    arrow_h(draw, V_X2+EGAP, B_X1-EGAP, FWD_Y,  "1. Request",    forward=True,  above=True)
    arrow_h(draw, B_X1-EGAP, V_X2+EGAP, BACK_Y, "4. Return JWT", forward=False, dashed=True, above=False)
    arrow_h(draw, B_X2+EGAP, T_X1-EGAP, FWD_Y,  "3. Create JWT", forward=True,  above=True)
    arrow_h(draw, T_X1-EGAP, B_X2+EGAP, BACK_Y, "JWT Response",  forward=False, dashed=True, above=False)
    arrow_v(draw, V_CX, R1Y+BH+EGAP, R2Y-EGAP, label="5. Play with JWT", dashed=True)

    # ── title ──
    draw.text((p(12), p(14)), "JWT Playback Token Flow",
              font=get_font(14, bold=True), fill=ORANGE, anchor="lt")
    draw.text((p(12), p(32)), "nanoStream Cloud Security Architecture",
              font=get_font(10), fill=MID, anchor="lt")
    draw.rectangle([p(12), p(50), p(270), p(52)], fill=ORANGE)

    img = img.resize((WIDTH, HEIGHT), Image.LANCZOS)
    img.save("secure_token_workflow.png")
    print("Saved.")

render()
