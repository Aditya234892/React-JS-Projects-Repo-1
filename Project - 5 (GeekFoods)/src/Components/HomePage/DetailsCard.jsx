const DetailsCard = (props) => {
  return (
    <div className="w-1/4 flex flex-col gap-5">
      <div className="shadow-xl p-6 rounded-xl bg-slate-300">
        <p>{props.desc}</p>
      </div>
      <div className="flex gap-5">
        <div
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: "cover", // or 'contain', depending on your need
            backgroundPosition: 'center',
            width: "50px",
            height: "52px",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <div>
          <p className="font-bold">{props.name}</p>
          <p>{props.role}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
