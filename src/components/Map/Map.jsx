import {
    Map, MapMarker,
    MarkerContent,
    MarkerPopup,
    MarkerTooltip,
} from "../ui/map";

export function MapPaesani() {
    const location = {
        id: 1,
        name: "Paesani - Refrigeração e Ar Condicionado",
        address: "Rua Giácomo Módolo, 1134 - Cerquilho, SP",
        lng: -47.7652395829592,
        lat: -23.165203365767656,
    };

    return (
        <div className="h-[500px] w-[400px] rounded-xl overflow-hidden shadow-lg">
            <Map
                center={[location.lng, location.lat]}
                zoom={16}
                pitch={65}
                bearing={-30}
                style="https://tiles.openfreemap.org/styles/liberty"
            >
                <MapMarker longitude={location.lng} latitude={location.lat}>
                    <MarkerContent>
                        <div className="bg-[#6ec1e4] size-5 rounded-full border-2 border-white" />
                    </MarkerContent>

                    <MarkerTooltip className="flex-col p-2 items-center justify-center gap-2">
                        <p className="font-medium">{location.name}</p>
                    </MarkerTooltip>

                    <MarkerPopup>
                        <div className="space-y-1 flex flex-col items-center justify-center">
                            <h1 className="font-medium">{location.name}</h1>
                            <p className="text-sm text-muted-foreground">
                                {location.address}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
                            </p>
                        </div>
                    </MarkerPopup>
                </MapMarker>
            </Map>
        </div>
    )
}