import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AthleteWithSport } from "@/services/athletes";
import { GoPerson } from "react-icons/go";

function formatFollowersCount(count: number) {
  if (count < 1000) {
    return count;
  }

  if (count < 10000) {
    return count.toString().slice(0, 1) + "," + count.toString().slice(1, 4);
  }

  if (count < 1_000_000) {
    return `${count / 1000}K`;
  }

  return `${count / 1_000_000}M`;
}

export function AthleteCard({ athlete }: { athlete: AthleteWithSport }) {
  return (
    <Card className="w-full group">
      <CardHeader className="flex items-start justify-between p-4 flex-row overflow-hidden gap-2">
        <div className="flex items-center space-x-4 truncate">
          <Avatar className="border-2 border-black w-14 h-14">
            <AvatarImage
              src={athlete.instagramImageUrl!}
              alt={athlete.name}
              className="w-14 h-14 object-cover"
            />
          </Avatar>

          <div className="truncate">
            <CardTitle className="text-lg font-bold truncate">
              {athlete.instagramName}
            </CardTitle>
            <CardDescription className="text-sm truncate">
              {athlete.sport.name}
            </CardDescription>
          </div>
        </div>

        <div className="font-medium flex items-center gap-1">
          <GoPerson className="w-5 h-5" />
          {formatFollowersCount(athlete.instagramFollowersCount!)}
        </div>
      </CardHeader>

      <CardContent className="p-4 text-sm text-stone-700">
        <p className="min-h-[7.5em] leading-[1.5em]">{athlete.instagramBio}</p>
      </CardContent>
    </Card>
  );
}
